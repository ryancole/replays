"use strict";

var aws = require('aws-sdk');
var Boom = require('boom');
var Replays = require('../repository/replay');
var Settings = require('../../settings');


function update (request, reply) {

  // the id of the replay to look up
  const id = request.params.id;

  // the account of the replay owner
  const account = request.auth.credentials.id;

  // first, get the replay with the given
  // id because we need the aws key
  Replays.get(id, account, (err, replay) => {

    if (err) {
      return reply(Boom.notFound());
    }

    let s3 = new aws.S3({
      region: Settings.AWS_REGION
    });

    let params = {
      Key: replay.aws_key,
      Bucket: Settings.AWS_S3_BUCKET,
      ACL: request.payload.public == true ? "public-read" : "private"
    };

    // second, update the object's acl settings
    // on aws side of things
    s3.putObjectAcl(params, (err, result) => {

      if (err) {
        return reply(Boom.badImplementation());
      } else if (result == null) {
        return reply(Boom.badImplementation());
      }

      const operation = request.payload.public == true ?
                        Replays.enableSharing :
                        Replays.disableSharing;

      // third, we can now safely update the public
      // setting in our local database
      operation(id, account, (err, result) => {

        if (err) {
          return reply(Boom.badImplementation());
        } else if (result != true) {
          return reply(Boom.badImplementation());
        }

        const payload = {
          id: id,
          success: true
        };

        return reply(payload);

      });

    });

  });

};


function index (request, reply) {

  // the account id of the user to fetch
  // replays for, since we assume you can
  // only fetch replays for the auth'd user
  const id = request.auth.credentials.id;

  // fetch replays for the authenticated user
  Replays.getAllByAccountId(id, (err, body) => {

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
  Replays.get(id, account, function (err, body) {

    if (err) {
      return reply(Boom.notFound());
    }

    return reply(body);

  });

};


function remove (request, reply) {

  // the id of the replay to remove
  const id = parseInt(request.params.id);

  // the account of the replay owner
  const account = request.auth.credentials.id;

  // first, get the replay with the given id
  // because we need the aws key, etc
  Replays.get(id, account, (err, replay) => {

    if (err) {
      return reply(Boom.notFound());
    }

    let s3 = new aws.S3({
      region: 'us-west-2'
    });

    let params = {
      Key: replay.aws_key,
      Bucket: "dankgg"
    };

    // second, delete the replay file from
    // our aws bucket
    s3.deleteObject(params, (err, result) => {

      if (err) {
        return reply(Boom.badImplementation());
      } else if (result == null) {
        return reply(Boom.badImplementation());
      }

      // third, we can now safely delete the
      // replay file from our own database
      Replays.remove(id, account, (err, body) => {

        if (err) {
          return reply(Boom.badImplementation());
        } else if (body != true) {
          return reply(Boom.badImplementation());
        }

        const payload = {
          id: id,
          success: true
        };

        return reply(payload);

      });

    });

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
  Replays.get(id, account, (err, body) => {

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
    path: '/replay/{id}',
    method: 'DELETE',
    handler: remove
  },
  {
    path: '/replay/{id}',
    method: 'PATCH',
    handler: update
  },
  {
    path: '/replay/{id}/download',
    method: 'GET',
    handler: download
  }
];
