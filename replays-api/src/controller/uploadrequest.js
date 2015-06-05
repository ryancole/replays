"use strict";

var aws = require('aws-sdk');
var Boom = require('boom');


/**
 * sign an S3 upload request
 */

function create (request, reply) {

  let s3 = new aws.S3;
  
  // prepare the signature payload, remember
  // this means the client must provide the
  // same ACL and content-type when using PUT
  let params = {
    Key: request.query.name,
    Bucket: "lol-replays",
    Expires: 60,
    ContentType: request.query.type
  };

  // request a signed url from S3
  s3.getSignedUrl('putObject', params, (err, data) => {

    if (err) {
      return reply(Boom.badImplementation());
    }

    let signature = {
      url: data
    };

    return reply(signature);

  });

};

module.exports = [
  {
    path: '/api/uploadrequest',
    method: 'GET',
    config: {
      auth: false
    },
    handler: create
  }
];
