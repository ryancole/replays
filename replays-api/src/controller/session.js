'use strict';

var jwt = require('jsonwebtoken');
var Boom = require('boom');

/**
 * create a new session
 */
function create (request, reply) {

  // the token payload
  let payload = {
    _id: request.payload._id,
    username: request.payload.username,
    dateCreated: request.payload.dateCreated
  };

  // the token options
  let options = {
    expiresInMinutes: 60*5
  };

  // sign the token
  let token = jwt.sign(payload, 'lol', options);

  // format response
  let response = {
    token: token
  };

  return reply(response);

};

module.exports = [
  {
    path: '/api/session',
    config: {
      auth: false
    },
    method: 'POST',
    handler: create
  }
];
