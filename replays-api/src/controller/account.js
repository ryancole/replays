var Boom = require('boom');

function register (request, response) {
  return response(Boom.notImplemented());
};

module.exports = [
  {
    path: '/api/account/register',
    config: {
      auth: false
    },
    method: 'POST',
    handler: register
  }
];
