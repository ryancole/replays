"use strict";

var Boom = require('boom');
var replays = require('../repository/replay');


function index (request, reply) {

  // the account id to fetch replays for
  const id = request.auth.credentials.id;

  // fetch replays for the account
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


module.exports = [
  {
    path: '/api/replay',
    method: 'GET',
    handler: index
  },
  {
    path: '/api/replay/{id}',
    method: 'GET',
    handler: detail
  }
];
