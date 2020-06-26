const path = require("path");

module.exports = {
  setupFilesAfterEnv: ["<rootDir>/src/__test__/setup.ts"],
  roots: ["./src/__test__"],
  moduleDirectories: ["node_modules", path.join(__dirname, "src", "__test__")],
  moduleNameMapper: {
    "@src/(.*)": "<rootDir>/src/$1",
    "^.+\\.(css|styl|less|sass|scss|png|jpg|svg|ttf|woff|woff2)$": "identity-obj-proxy",
  },
  transform: {
    "^.+\\.(js|jsx|ts|tsx)?$": "babel-jest",
    "^.+\\.(css|styl|less|sass|scss|png|jpg|svg|ttf|woff|woff2)$": "jest-transform-stub",
  },
};
