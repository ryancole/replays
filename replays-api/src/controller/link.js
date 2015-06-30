"use strict";

var Boom = require('boom');
var Links = require('../repository/link');
var Replays = require('../repository/replay');


function index (request, reply) {

  // the account id of the user to fetch
  // links for, since we assume you can
  // only fetch links for the auth'd user
  const id = request.auth.credentials.id;

  // fetch links for the authenticated user
  Links.getAllByAccountId(id, (err, body) => {

    if (err) {
      return reply(Boom.notFound());
    }

    // response payload
    const payload = {
      links: body
    };

    return reply(payload);

  });

};


function create (request, reply) {

  // the id of the replay to look up
  const replayId = request.payload.replay;

  // the account of the replay owner
  const account = request.auth.credentials.id;

  // fetch the replay from the database
  Replays.get(replayId, account, function (err, body) {

    if (err) {
      return reply(Boom.notFound());
    }

    Links.insert(body, (err, body) => {

      if (err) {
        return reply(Boom.badImplementation());
      }

      return reply(body);

    });

  });

};


module.exports = [
  {
    path: '/link',
    method: 'GET',
    handler: index
  },
  {
    path: '/link',
    method: 'POST',
    handler: create
  }
];
