"use strict";

var aws = require('aws-sdk');
var Boom = require('boom');


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
      message.Records.forEach((record) => {

        if (record.s3.configurationId != "MyUploadNotification") {
          return;
        }

        let metadata = record.s3.object;

        console.log(metadata);

      });

    }

    // successful notification
    return reply();

  } else {

    // unknown type possibly
    return reply(Boom.badRequest());

  }

};


module.exports = [
  {
    path: '/api/snsnotification',
    method: 'POST',
    config: {
      auth: false
    },
    handler: handle
  }
];
