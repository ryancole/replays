"use strict";

var aws = require('aws-sdk');
var Boom = require('boom');
var Replays = require('../repository/replay');


/**
 * create replay from S3 notice
 */

function handle (request, reply) {
  
  // extract the sns message type
  let type = request.headers["x-amz-sns-message-type"];

  // handle subscription confirmation
  if (type == "SubscriptionConfirmation") {

    let sns = new aws.SNS({
      region: 'us-west-2'
    });

    // parse json payload
    let payload = JSON.parse(request.payload);

    // format params
    let params = {
      Token: payload.Token,
      TopicArn: payload.TopicArn
    };

    // confirm subscription
    sns.confirmSubscription(params, (err, data) => {

      if (err) {
        return reply(Boom.badImplementation());
      }

      // successful confirmation
      return reply();

    });

  } else if (type == "Notification") {

    // parse the json payload
    let payload = JSON.parse(request.payload);

    // explicitly handle an S3 notification
    if (payload.Subject == "Amazon S3 Notification") {

      let message = JSON.parse(payload.Message);

      // a notification may contain multiple
      // S3 notifications in a single message
      message.Records.forEach(record => {

        if (record.s3.configurationId != "MyUploadNotification") {
          return reply(Boom.badImplementation());
        }

        // split the key so we can extract
        // the user related information
        let parts = record.s3.object.key.split('/');

        if (parts.length != 3) {
          return reply(Boom.badImplementation());
        }

        let replay = {
          size: record.s3.object.size,
          aws_key: record.s3.object.key,
          account_id: parseInt(parts[0]),
          filename: parts[2]
        };

        // save the replay to the database
        Replays.insert(replay, function (err, response) {

          if (err) {
            return reply(Boom.badImplementation());
          }

          // successful reply to AWS
          return reply();

        });

      });

    }

  } else {

    // unknown type possibly
    return reply(Boom.badRequest());

  }

};


module.exports = [
  {
    path: '/snsnotification',
    method: 'POST',
    config: {
      auth: false
    },
    handler: handle
  }
];
