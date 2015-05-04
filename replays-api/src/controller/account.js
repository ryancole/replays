var Boom = require('boom');
var nano = require('nano')('http://ryancole.iriscouch.com:6984');

/**
 * create a new user account
 */
function create (request, response) {
  var accounts = nano.use('accounts');
  accounts.insert({username:'lol'}, function (err, body) {
    if (err) console.log(err);
    return response(body);
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
