'use strict';

var jwt = require('jsonwebtoken');
var Boom = require('boom');
var accounts = require('../repository/account');
var settings = require('../../settings');


/**
 * create a new session
 */

function create (request, reply) {

  const username = request.payload.username;
  const password = request.payload.password;

  // fetch the requested account
  accounts.getByUsernameAndPassword(username, password, (err, account) => {

    if (err) {
      return reply(err);
    }

    // the token payload
    let payload = {
      id: account.id,
      username: account.username
    };

    // the token options
    let options = {
      expiresInMinutes: 60 * 12
    };

    // sign the token
    let token = jwt.sign(payload, settings.JWT_KEY, options);

    // format response
    let response = {
      token: token
    };

    return reply(response);

  });

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
