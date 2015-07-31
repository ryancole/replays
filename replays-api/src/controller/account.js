"use strict";

var Boom = require('boom');
var Accounts = require('../repository/account');


function create (request, reply) {

  // initialize account
  let account = {
    username: request.payload.username,
    password: request.payload.password
  };

  // save account to database
  Accounts.insert(account, function (err, body) {

    if (err) {
      return reply(Boom.badImplementation());
    }

    return reply(body);
    
  });

};


function detail (request, reply) {

  // account username to get details for
  const username = request.params.username;

  // query the database for the desired
  // account information
  Accounts.getByUsername(username, function (err, body) {

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
    path: '/account',
    config: {
      auth: false
    },
    method: 'POST',
    handler: create
  },
  {
    path: '/account/{username}',
    config: {
      auth: false
    },
    method: 'GET',
    handler: detail
  }
];
