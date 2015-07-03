var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

new WebpackDevServer(webpack(config), {

  hot: true,
  historyApiFallback: true

}).listen(8081, 'localhost', function (err, result) {

  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at localhost:8081');

});