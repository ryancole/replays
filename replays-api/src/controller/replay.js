"use strict";

var Boom = require('boom');
var replays = require('../repository/replay');


/**
 * Handle replay detail request
 */

function detail (request, reply) {

  // the id of the replay to look up
  let id = request.params.id;

  // fetch the replay from the database
  replays.get(id, function (err, body) {

    if (err) {
      return reply(Boom.notFound());
    }

    return reply(body);

  });

};


/**
 * Handle replay index request
 */

function index (request, reply) {

  // get possible account id from query string
  let accountId = request.query.accountId;

  if (accountId) {
    replays.getAllByAccountId(accountId, (err, body) => {
      if (err) {
        return reply(Boom.notFound());
      }
      return reply({replays: body});
    });
  } else {
    replays.getAll((err, body) => {
      if (err) {
        console.log(err);
        return reply(Boom.notFound());
      }
      return reply({replays: body});
    });
  }

};


/**
 * Handle replay for account owner request
 */

function replaysForOwner (request, reply) {

  // the account id to filter on
  let id = request.auth.credentials._id;

  // fetch the records from the databse
  replays.getAllByAccountId(id, (err, body) => {

    if (err) {
      return reply(Boom.notFound());
    }

    return reply(body);

  });

}


module.exports = [
  {
    path: '/api/replay',
    method: 'GET',
    config: {
      auth: false
    },
    handler: index
  },
  {
    path: '/api/replay/mine',
    method: 'GET',
    handler: replaysForOwner
  },
  {
    path: '/api/replay/{id}',
    method: 'GET',
    config: {
      auth: false
    },
    handler: detail
  }
];
