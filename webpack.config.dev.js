const path = require("path");
const resolve = path.resolve.bind(path, __dirname);
const merge = require("webpack-merge");
const baseConfig = require("./webpack.config.base");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(baseConfig, {
  mode: "development",
  devtool: "source-map",
  devServer: {
    historyApiFallback: {
      disableDotRule: true,
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: resolve("template/index.ejs"),
      version: process.env.npm_package_version,
    }),
  ],
});
