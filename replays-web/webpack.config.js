'use strict';

var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8081',
    'webpack/hot/only-dev-server',
    path.resolve(__dirname, 'src', 'AppBootstrap.js')
  ],
  plugins: [
    new webpack.NoErrorsPlugin,
    new webpack.HotModuleReplacementPlugin,
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ],
  resolve: {
    alias: {
      bootstrap: 'bootstrap/dist/css/bootstrap.css'
    }
  },
  output: {
    path: process.env.NODE_ENV === 'production' ?
          path.resolve(__dirname, 'build', 'release', 'static') :
          path.resolve(__dirname, 'build', 'debug', 'static'),
    filename: 'app.js'
  },
  devServer: {
    hot: true,
    port: 8081,
    colors: true,
    publicPath: '/static/'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: [
          'react-hot',
          'babel'
        ],
        include: path.resolve(__dirname, 'src')
      },
      {
        test: /\.json$/,
        loader: 'json',
        exclude: /node_modules/
      }
    ]
  }
};
