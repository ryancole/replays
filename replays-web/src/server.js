'use strict';

var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('../webpack.config');

// initialize webpack dev server
let server = new WebpackDevServer(webpack(config), {

  hot: true,
  colors: true,
  inline: true,
  contentBase: '../build/debug',
  historyApiFallback: true

});

// handle incoming requests
server.listen(8081, 'localhost', function (err, result) {

  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at localhost:8081');

});
