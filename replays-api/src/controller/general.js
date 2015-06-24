"use strict";


function status (request, reply) {

  return reply({
    time: Date.now()
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
