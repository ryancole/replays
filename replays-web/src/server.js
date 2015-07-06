'use strict';

var path = require('path');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('../webpack.config');

// initialize webpack dev server
let server = new WebpackDevServer(webpack(config), {

  hot: true,
  stats: {
    colors: true
  },
  publicPath: config.output.publicPath,
  contentBase: process.env.NODE_ENV === 'production' ?
               path.resolve(__dirname, '..', 'build', 'release') :
               path.resolve(__dirname, '..', 'build', 'debug'),
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
