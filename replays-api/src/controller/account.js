var Boom = require('boom');
var accounts = require('../repository/account');

/**
 * create a new user account
 */
function create (request, response) {
  accounts.insert({}, function (body) {
    response(body);
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
