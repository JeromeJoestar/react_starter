const path = require("path");

const resolve = path.resolve.bind(path, __dirname);

module.exports = {
  entry: ["./src/index.tsx"],
  output: {
    path: resolve("build"),
    filename: "assets/[name].[hash].js",
    chunkFilename: "assets/[name].[hash].js",
    publicPath: "/",
  },
  resolve: {
    modules: ["node_modules", path.join(__dirname, "src")],
    extensions: [".ts", ".tsx", ".js", ".jsx"],
    alias: {
      react: require.resolve("react"),
      "@src": resolve("./src"),
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "babel-loader",
      },
      {
        test: /\.(scss|css)$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: { sourceMap: true },
          },
          {
            loader: "resolve-url-loader",
          },
          { loader: "sass-loader", options: { sourceMap: true } },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg)$/,
        loader: "url-loader?limit=100000",
      },
      {
        test: [/\.gif$/, /\.jpg$/, /\.png$/, /\.webp$/, /\.ico$/],
        loader: "url-loader",
        options: {
          limit: false,
        },
      },
    ],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: "all",
          enforce: true,
          name: "vendor",
          test: /[\\/]node_modules[\\/]/,
        },
      },
    },
  },
};
