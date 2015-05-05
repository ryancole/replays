'use strict';

var Boom = require('boom');
var crypto = require('crypto');
var accounts = require('../repository/account');

/**
 * handle account creation request
 */
function create (request, reply) {

  // initialize the hasher
  let hash = crypto.createHmac('sha512', 'lol');

  // add password to hash
  hash.update(request.payload.password);

  // initialize account
  let account = {
    username: request.payload.username,
    password: hash.digest('hex')
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
