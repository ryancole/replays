"use strict";

var aws = require('aws-sdk');
var Boom = require('boom');


function get (request, reply) {

  let s3 = new aws.S3({
    region: 'us-west-2'
  });

  // format the object key
  let key = `${request.auth.credentials.id}/${Date.now()}/${request.query.name}`;

  // prepare the signature payload, remember
  // this means the client must provide the
  // same ACL and content-type when using PUT
  let params = {
    Key: key,
    Bucket: "dankgg",
    Expires: 60,
    ContentType: "application/octet-stream",
    ContentDisposition: "attachment",
    Metadata: {
      user: request.auth.credentials.id.toString(),
      filename: request.query.name
    }
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
    path: '/api/downloadrequest',
    method: 'GET',
    handler: get
  }
];
