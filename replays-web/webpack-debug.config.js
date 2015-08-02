var path = require("path");
var webpack = require("webpack");
var CleanPlugin = require("clean-webpack-plugin");
var HtmlWebpackPlugin = require("html-webpack-plugin");

// so we can read vendor dependencies
var pkg = require("./package.json");

// the output destination
var destination = path.resolve(__dirname, "build", "debug");

module.exports = {
  entry: {
    app: [
      "webpack-dev-server/client?http://localhost:8081",
      "webpack/hot/only-dev-server",
      path.resolve(__dirname, "src", "App.js")
    ],
    vendor: Object.keys(pkg.dependencies)
  },
  plugins: [
    new CleanPlugin([
      path.relative(__dirname, destination)
    ]),
    new webpack.DefinePlugin({
      "process.env": {
        "NODE_ENV": JSON.stringify("development")
      }
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.CommonsChunkPlugin(
      "vendor",
      "vendor.[chunkhash].js"
    ),
    new HtmlWebpackPlugin({
      title: "A place to store your League of Legends replays",
      filename: "../index.html"
    })
  ],
  output: {
    path: path.resolve(destination, "static"),
    filename: "app.[chunkhash].js",
    publicPath: "/static/"
  },
  resolve: {
    alias: {
      "bootstrap": "bootstrap/dist"
    }
  },
  devtool: "source-map",
  devServer: {
    hot: true,
    port: 8081,
    colors: true,
    publicPath: "/static/",
    historyApiFallback: true
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loader: "eslint-loader",
        include: path.resolve(__dirname, "src")
      }
    ],
    loaders: [
      {
        test: /\.js$/,
        loaders: [
          "react-hot",
          "babel"
        ],
        include: path.resolve(__dirname, "src")
      },
      {
        test: /\.json$/,
        loader: "json",
        exclude: /node_modules/
      },
      {
        test: /\.woff2?$/,
        loader: "url-loader?limit=10000&mimetype=application/font-woff"
      },
      {
        test: /(\.ttf|\.eot|\.svg)$/,
        loader: "file-loader"
      },
      {
        test: /\.css$/,
        loaders: [ "style", "css" ]
      }
    ]
  }
};
