"use strict";

var aws = require('aws-sdk');
var Boom = require('boom');


function get (request, reply) {

  let s3 = new aws.S3({
    region: 'us-west-2'
  });

  // prepare the signature payload, remember
  // this means the client must provide the
  // same ACL and content-type when using PUT
  let params = {
    Key: request.query.key,
    Bucket: "dankgg",
    Expires: 60
  };

  // request a signed url from S3
  s3.getSignedUrl('getObject', params, (err, data) => {

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
    path: '/api/downloadrequest',
    method: 'GET',
    handler: get
  }
];
