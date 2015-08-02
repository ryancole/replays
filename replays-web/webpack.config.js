var path = require("path");
var webpack = require("webpack");
var CleanPlugin = require("clean-webpack-plugin");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

// so we can read vendor dependencies
var pkg = require("./package.json");

// the build output destination takes
// the current node env into consideration
var destination = process.env.NODE_ENV === "production" ?
                  path.resolve(__dirname, "build", "release", "static") :
                  path.resolve(__dirname, "build", "debug", "static");

// default entry point for development
var entry = [
  "webpack-dev-server/client?http://localhost:8081",
  "webpack/hot/only-dev-server",
  {
    app: path.resolve(__dirname, "src", "App.js"),
    vendor: Object.keys(pkg.dependencies)
  }
];

// exclude dev server from entry point
// if we're in production mode
if (process.env.NODE_ENV === "production") {
  entry = {
    app: path.resolve(__dirname, "src", "App.js"),
    vendor: Object.keys(pkg.dependencies)
  };
}

// default collection of plugins for
// development mode
var plugins = [
  new CleanPlugin([
    path.relative(__dirname, destination)
  ]),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.optimize.CommonsChunkPlugin(
    "vendor",
    "vendor.[chunkhash].js"
  )
];

// exclude hot module replacement plugin
// when we're in production, and add uglify
if (process.env.NODE_ENV === "production") {
  plugins = [
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
    })
  ];
}

// default css loaders assumes development
// mode and will inline the css within the
// generated bundle
var cssLoader = {
  test: /\.css$/,
  loaders: [ "style", "css" ]
};

// use the extract text plugin, for css, in
// production mode so that we can benefit
// from css caching and avoid style flashing
if (process.env.NODE_ENV === "production") {
  cssLoader = {
    test: /\.css$/,
    loader: ExtractTextPlugin.extract("style", "css")
  };
}

module.exports = {
  entry: entry,
  plugins: plugins,
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
      cssLoader
    ]
  }
};
