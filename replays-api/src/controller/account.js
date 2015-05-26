'use strict';

var Boom = require('boom');
var accounts = require('../repository/account');


/**
 * Handle account creation request
 */

function create (request, reply) {

  // initialize account
  let account = {
    username: request.payload.username,
    password: request.payload.password
  };

  // save account to database
  accounts.insert(account, function (err, body) {

    if (err) {
      return reply(Boom.badImplementation());
    }

    return reply(body);
    
  });

};


/**
 * Handle account detail request
 */

function detail (request, reply) {

  // sanitize username
  let username = request.params.username;

  // fetch account details from database
  accounts.getByUsername(username, function (err, body) {

    if (err) {
      return reply(Boom.notFound());
    }

    return reply(body);

  });

}


/**
 * Module exports
 */

module.exports = [
  {
    path: '/api/account',
    config: {
      auth: false,
      cors: true
    },
    method: 'POST',
    handler: create
  },
  {
    path: '/api/account/{username}',
    config: {
      auth: false,
      cors: true
    },
    method: 'GET',
    handler: detail
  }
];
