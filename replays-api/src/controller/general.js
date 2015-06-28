"use strict";

var settings = require('../../settings');


function status (request, reply) {

  return reply({
    version: settings.VERSION
  });

};


module.exports = [
  {
    path: '/',
    config: {
      auth: false
    },
    method: 'GET',
    handler: status
  }
];
