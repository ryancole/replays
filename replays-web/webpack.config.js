'use strict';

var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8081',
    'webpack/hot/only-dev-server',
    path.resolve(__dirname, 'src', 'scripts', 'AppBootstrap.jsx')
  ],
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  output: {
    path: process.env.NODE_ENV === 'production' ?
          path.resolve(__dirname, 'build', 'release', 'public') :
          path.resolve(__dirname, 'build', 'debug', 'public'),
    filename: 'app.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json', '.css']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: [
          'react-hot',
          'babel'
        ],
        include: path.resolve(__dirname, 'src', 'scripts')
      },
      {
        test: /\.json$/,
        loader: 'json',
        include: path.resolve(__dirname, 'src')
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css'],
        include: path.resolve(__dirname, 'src', 'styles')
      }
    ]
  }
};
