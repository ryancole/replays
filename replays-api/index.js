var server = require('./src/server');

// start handling requests
server.start(function () {
  console.log(`Server running at ${server.info.uri} ...`);
});
