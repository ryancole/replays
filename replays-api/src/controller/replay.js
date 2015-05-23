"use strict";

var aws = require('aws-sdk');
var Boom = require('boom');


let replays = [
  {
    filename: "perma.txt",
    description: "this will always be here"
  }
];

/**
 * respond with a set of replays
 */

function index (request, reply) {
  return reply(replays);
};


/**
 * create a new replay
 */

function create (request, reply) {

  // initialize replay
  let replay = {
    filename: request.payload.filename,
    description: request.payload.description
  };

  // push into collection
  replays.push(replay);

  // response with new collection
  return reply(replay);

};


/**
 * sign a replay upload
 */

function sign (request, reply) {

  let s3 = new aws.S3;

  // set aws config
  aws.config.update({
    accessKeyId: "AKIAJ6GCHLMFRIRU2ZTQ",
    secretAccessKey: "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"
  });

  // configure S3
  let params = {
    bucket: "league-replays",
    key: "foo",
    expires: 60,
    contenttype: "binary",
    acl: "public-read"
  };

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
    handler: create
  }
];
