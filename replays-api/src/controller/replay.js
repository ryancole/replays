var Boom = require('boom');

function get (request, response) {
  return response(Boom.notImplemented());
};

module.exports = [
  {
    path: '/api/replay',
    method: 'GET',
    handler: get
  }
];
