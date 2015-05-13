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

/**
 * respond with a single replay
 */
function detail (request, reply) {

  return reply(Boom.notFound());

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
