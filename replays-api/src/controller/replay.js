"use strict";

var Boom = require('boom');


let replays = [
  {
    filename: "perma.txt",
    description: "this will always be here"
  }
];

/**
 * respond with a set of replays
 */

function index (request, reply) {
  return reply(replays);
};


/**
 * create a new replay
 */

function create (request, reply) {

  // initialize replay
  let replay = {
    filename: request.payload.filename,
    description: request.payload.description
  };

  // push into collection
  replays.push(replay);

  // response with new collection
  return reply(replays);

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
  },
  {
    path: '/api/replay',
    method: 'POST',
    config: {
      auth: false,
      cors: true
    },
    handler: create
  }
];
