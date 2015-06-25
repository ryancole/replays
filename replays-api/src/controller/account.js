"use strict";

var Boom = require('boom');
var accounts = require('../repository/account');


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


function detail (request, reply) {

  // the account id to get details for
  // this comes from auth creds because
  // atm it's only intended for the owner
  // of the account
  const id = request.auth.credentials.id;

  // the auth'd user needs to match the 
  // requested user id
  if (id != request.params.id) {
    return reply(Boom.unauthorized());
  }

  // query the database for the desired
  // account information
  accounts.getById(id, function (err, body) {

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
    path: '/account/{id}',
    method: 'GET',
    handler: detail
  }
];
