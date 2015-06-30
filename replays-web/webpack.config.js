'use strict';

var path = require('path');

module.exports = {
  entry: './src/AppBootstrap.jsx',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'app.js'
  },
  module: {
    loaders: [{
      test: /\.js?$/,
      loader: 'babel',
      include: path.resolve(__dirname, 'src')
    }]
  }
}
