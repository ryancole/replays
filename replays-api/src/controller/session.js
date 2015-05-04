var Boom = require('boom');

/**
 * create a new session
 */
function create (request, response) {
  return response(Boom.notImplemented());
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
