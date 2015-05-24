"use strict";

var aws = require('aws-sdk');
var Boom = require('boom');
var replays = require('../repository/replay');


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
    handler: sign
  }
];
