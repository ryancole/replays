"use strict";


function status (request, reply) {

  return reply();

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
