"use strict";

var aws = require('aws-sdk');
var Boom = require('boom');
var replays = require('../repository/replay');


/**
 * create replay from S3 notice
 */

function handleS3Notice (request, reply) {
  
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

  }

  // unknown type possibly
  return reply(Boom.badRequest());

};


/**
 * Handle replay index request
 */

function index (request, reply) {
  
  // fetch replays from database
  replays.getAll(function (err, body) {

    if (err) {
      return reply(Boom.notFound());
    }

    return reply(body);

  });

};


/**
 * sign a replay upload
 */

function sign (request, reply) {

  let s3 = new aws.S3;
  
  // configure S3
  let params = {
    ACL: "public-read",
    Key: request.payload.name,
    Bucket: "league-replays",
    Expires: 60,
    ContentType: request.payload.type
  };

  // request a signed url from aws
  s3.getSignedUrl('putObject', params, (err, data) => {

    if (err) {
      return reply(Boom.badImplementation());
    }

    let signature = {
      data: data,
      url: `https://league-replays.s3.amazonaws.com/${params.Key}`
    };

    return reply(signature);

  });

};

module.exports = [
  {
    path: '/api/replay',
    method: 'GET',
    config: {
      auth: false,
      cors: true
    },
    handler: index
  },
  {
    path: '/api/replay',
    method: 'POST',
    config: {
      auth: false,
      cors: true
    },
    handler: handleS3Notice
  }
];
