const path = require("path");
const merge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");
const baseConfig = require("./webpack.config.base");

const resolve = path.resolve.bind(path, __dirname);

const config = merge(baseConfig, {
  mode: "production",
  devtool: "source-map",
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      inject: true,
      template: resolve("template/index.ejs"),
      version: process.env.npm_package_version,
    }),
    new MiniCssExtractPlugin({
      filename: "assets/[name].[hash].css",
      chunkFilename: "assets/[name].[hash].css",
    }),
    new webpack.EnvironmentPlugin(["SAMPLE_ENV_VARIABLE"]),
  ],
});
// This is why I hate to have multi webpack files.
// You can't just merge rules. Rules is a list you end up with
// duplicated object and that breaks configuration.
config.module = {
  rules: [
    {
      test: /\.tsx?$/,
      loader: "babel-loader",
    },
    {
      test: /\.(scss|css)$/,
      use: [
        MiniCssExtractPlugin.loader,
        {
          loader: "css-loader",
        },
        {
          loader: "resolve-url-loader",
        },
        { loader: "sass-loader", options: { sourceMap: true } },
      ],
    },
    {
      test: /\.(woff|woff2|eot|ttf|svg|gif|jpg|png|webp)$/,
      loader: "url-loader",
      options: {
        name: "assets/[name].[hash].[ext]",
        limit: false,
      },
    },
  ],
};

module.exports = config;
