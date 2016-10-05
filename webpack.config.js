var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');

module.exports = {
  context: path.join(__dirname, "src"),
  devtool: debug ? "inline-sourcemap" : null,
  entry: "./js/client.js",
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: ['react-html-attrs', 'transform-decorators-legacy', 'transform-class-properties'],
        }
      }
    ]
  },
  output: {
    path: __dirname + "/src/",
    filename: "client.min.js"
  },
  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
};
{
  "name": "react-todos",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^4.13.4",
    "lodash": "^4.16.3",
    "react": "^15.3.2",
    "react-dom": "^15.3.2"
  },
  "devDependencies": {
    "babel-core": "^6.17.0",
    "babel-loader": "^6.2.5",
    "babel-preset-es2015": "^6.16.0",
    "babel-preset-react": "^6.16.0",
    "react-hot-loader": "^3.0.0-beta.5",
    "webpack": "^1.13.2",
    "webpack-dev-server": "^1.16.1"
  }
}

