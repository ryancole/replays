var Hapi = require('hapi');
var HapiAuthJwt = require('hapi-auth-jwt');

// application settings
var settings = require('../settings');

// initialize the http server
var server = module.exports = new Hapi.Server();

// specify server settings
server.connection({
  port: 8080,
  routes: {
    cors: true
  }
});

// register jwt authentication
server.register(HapiAuthJwt, function () {
  server.auth.strategy('token', 'jwt', 'required', {
    key: settings.JWT_KEY,
    validateFunc: require('./authentication').validate
  });
});

// register route handlers
server.route([].concat(
  require('./controller/link'),
  require('./controller/replay'),
  require('./controller/account'),
  require('./controller/general'),
  require('./controller/session'),
  require('./controller/snsnotification')
));
