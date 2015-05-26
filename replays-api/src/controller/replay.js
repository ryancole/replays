"use strict";

var Boom = require('boom');
var replays = require('../repository/replay');


/**
 * Handle replay index request
 */

function index (request, reply) {
  
  // fetch replays from database
  replays.getAll(function (err, body) {

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
      auth: false,
      cors: true
    },
    handler: index
  }
];
