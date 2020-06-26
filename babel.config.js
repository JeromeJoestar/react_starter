module.exports = {
  presets: [
    "@babel/react",
    "@babel/preset-typescript",
    [
      "@babel/preset-env",
      {
        targets: {
          edge: "17",
          firefox: "60",
          chrome: "67",
          safari: "11.1",
        },
        useBuiltIns: "usage",
        corejs: 3,
      },
    ],
  ],
  plugins: [
    "macros",
    "@babel/proposal-export-default-from",
    "@babel/proposal-export-namespace-from",
    "@babel/proposal-numeric-separator",
    "@babel/proposal-class-properties",
    "@babel/proposal-object-rest-spread",
    "syntax-dynamic-import",
    "transform-class-properties",
  ],
  env: {
    test: {
      plugins: ["dynamic-import-node"],
    },
  },
};
