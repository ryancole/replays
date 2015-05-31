"use strict";

var Boom = require('boom');
var replays = require('../repository/replay');


/**
 * Handle replay detail request
 */

function detail (request, reply) {

  let id = request.params.id;

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

function index (request, reply) {
  
  let skip = request.query.skip || 0;

  // fetch replays from database
  replays.getAllById(skip, function (err, body) {

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
    config: {
      auth: false
    },
    handler: index
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
