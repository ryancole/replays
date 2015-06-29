"use strict";

var aws = require('aws-sdk');
var Boom = require('boom');
var replays = require('../repository/replay');


function index (request, reply) {

  // the account id of the user to fetch
  // replays for, since we assume you can
  // only fetch replays for the auth'd user
  const id = request.auth.credentials.id;

  // fetch replays for the authenticated user
  replays.getAllByAccountId(id, (err, body) => {

    if (err) {
      return reply(Boom.notFound());
    }

    // response payload
    const payload = {
      replays: body
    };

    return reply(payload);

  });

};


function detail (request, reply) {

  // the id of the replay to look up
  const id = request.params.id;

  // the account of the replay owner
  const account = request.auth.credentials.id;

  // fetch the replay from the database
  replays.get(id, account, function (err, body) {

    if (err) {
      return reply(Boom.notFound());
    }

    return reply(body);

  });

};


function upload (request, reply) {

  if (request.payload.size > 30000000) {
    return reply(Boom.notAcceptable());
  }

  // the account of the replay owner
  const account = request.auth.credentials.id;

  let s3 = new aws.S3({
    region: 'us-west-2'
  });

  // format the object key
  let key = `${account}/${Date.now()}/${request.payload.name}`;

  // prepare the signature payload, remember
  // this means the client must provide the
  // same content-type when using PUT
  let params = {
    Key: key,
    Bucket: "dankgg",
    Expires: 60,
    ContentType: "binary/octet-stream",
    ContentDisposition: "attachment",
    Metadata: {
      user: account.toString(),
      filename: request.payload.name
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


function download (request, reply) {

  // the id of the replay to generate
  // a signed download request for
  const id = request.params.id;

  // the account of the replay owner
  const account = request.auth.credentials.id;

  // fetch the reply from the database
  replays.get(id, account, (err, body) => {

    if (err) {
      return reply(Boom.notFound());
    }

    let s3 = new aws.S3({
      region: 'us-west-2'
    });

    // prepare the signature payload, remember
    // this means the client must provide the
    // same ACL and content-type when using PUT
    let params = {
      Key: body.aws_key,
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

  });

};


module.exports = [
  {
    path: '/replay',
    method: 'GET',
    handler: index
  },
  {
    path: '/replay',
    method: 'POST',
    handler: upload
  },
  {
    path: '/replay/{id}',
    method: 'GET',
    handler: detail
  },
  {
    path: '/replay/{id}/download',
    method: 'GET',
    handler: download
  }
];
