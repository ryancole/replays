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
      test: /\.jsx?$/,
      loader: 'babel',
      exclude: /(node_modules|bower_components)/,
      query: {
        stage: 0,
        optional: ['runtime']
      }
    },
    {
      test: /\.json$/,
      loader: 'json',
      exclude: /(node_modules|bower_components)/
    }]
  }
}