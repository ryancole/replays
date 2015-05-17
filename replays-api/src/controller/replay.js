"use strict";

var Boom = require('boom');

/**
 * respond with a set of replays
 */
function index (request, reply) {

  let replays = [
    {
      name: 'foo'
    },
    {
      name: 'bar'
    }
  ];

  return reply(replays);

};

module.exports = [
  {
    path: '/api/replay',
    method: 'GET',
    handler: index
  }
];
