const merge = require("webpack-merge");
const webpack = require("webpack");
const config = require("./webpack.config.base");
const path = require('path');

const GLOBALS = {
  "process.env": {
    NODE_ENV: JSON.stringify("development")
  },
  __DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || "true"))
};

const routes = [path.resolve(__dirname, './../src/app/routes.json')]; 

module.exports = merge(config, {
  cache: true,
  devtool: "cheap-module-eval-source-map",
  output: {
    publicPath: "http://localhost:3000/"
  },
  entry: {
    application: [
      "webpack-hot-middleware/client",
      "react-hot-loader/patch",
      "development"
    ],
    vendor: ["react", "react-dom", "react-redux", "redux"]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin(GLOBALS)
  ],
  module: {
    rules: [
      // Sass
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader", // creates style nodes from JS strings
            options: {
              sourceMap: true
            }
          },
          {
            loader: "css-loader", // translates CSS into CommonJS
            options: {
              sourceMap: true
            }
          },
          {
            loader: "postcss-loader",
            options: {
              plugins: () => [
                // require("postcss-cssnext")(),
                require("autoprefixer")({
                  browsers: ["last 2 versions"]
                }),
                require("cssnano")()
              ]
            }
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
          test: /\.json$/,
          exclude: routes, // exclude routes.json from being loaded by the usual json-loader
          loader: 'json-loader',
        },
        {
            test: /\.json$/,
            include: routes, // load routes.json with route-loader instead
            loader: 'redux-json-router/lib/route-loader',
            options: {
              // debug (boolean) - defaults to false
              // chunks (boolean) - defaults to true
            },
          },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"]
      }
    ]
  }
});
