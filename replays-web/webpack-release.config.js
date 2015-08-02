var path = require("path");
var webpack = require("webpack");
var CleanPlugin = require("clean-webpack-plugin");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

// so we can read vendor dependencies
var pkg = require("./package.json");

// the output destination
var destination = path.resolve(__dirname, "build", "release");

module.exports = {
  entry: {
    app: path.resolve(__dirname, "src", "App.js"),
    vendor: Object.keys(pkg.dependencies)
  },
  plugins: [
    new CleanPlugin([
      path.relative(__dirname, destination)
    ]),
    new ExtractTextPlugin("styles.css"),
    new webpack.optimize.CommonsChunkPlugin(
      "vendor",
      "vendor.[chunkhash].js"
    ),
    new webpack.DefinePlugin({
      "process.env": {
        "NODE_ENV": JSON.stringify("production")
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new HtmlWebpackPlugin({
      title: "A place to store your League of Legends replays"
    })
  ],
  output: {
    path: destination,
    filename: "app.[chunkhash].js",
    publicPath: "/static/"
  },
  resolve: {
    alias: {
      "bootstrap": "bootstrap/dist"
    }
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
        loader: ExtractTextPlugin.extract("style", "css")
      }
    ]
  }
};
