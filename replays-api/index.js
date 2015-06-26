var server = require('./src/server');

// start handling requests
server.start(() => {

  console.log(`Server running at ${server.info.uri} ...`);
  
});
