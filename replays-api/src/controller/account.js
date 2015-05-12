'use strict';

var Boom = require('boom');
var accounts = require('../repository/account');

/**
 * handle account creation request
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

module.exports = [
  {
    path: '/api/account',
    config: {
      auth: false
    },
    method: 'POST',
    handler: create
  }
];
