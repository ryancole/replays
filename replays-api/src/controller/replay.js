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
  replays.getById(id, function (err, body) {

    if (err) {
      return reply(Boom.notFound());
    }

    return reply(body);

  });

};


/**
 * Handle replay index request
 */

function replaysByPage (request, reply) {

  // default to only this many
  // at a time
  let limit = 20;

  // how many to skip, for pagination
  // if any  
  let skip = request.query.skip || 0;

  // fetch then records from the databse
  replays.getAllById(skip, limit, function (err, body) {

    if (err) {
      return reply(Boom.notFound());
    }

    return reply(body);

  });

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
    handler: replaysByPage
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
