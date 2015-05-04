var Hapi = require('hapi');
var HapiAuthJwt = require('hapi-auth-jwt');

// initialize the http server
var server = module.exports = new Hapi.Server();

// specify server settings
server.connection({
  port: 8080
});

// register jwt authentication
server.register(HapiAuthJwt, function () {
  server.auth.strategy('token', 'jwt', 'required', {
    key: 'foobar',
    validateFunc: require('./authentication').validate
  });
});

// register route handlers
server.route(require('./controller'));
