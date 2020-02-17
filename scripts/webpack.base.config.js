/**
 * 主要用于代码的组织与es6语法处理, base公共的基础配置
 */
const path = require("path");

module.exports = {
  entry: {
    // eslint-disable-next-line no-undef
    name: path.resolve(__dirname, "../lib/index.js")
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader?cacheDirectory"
        },
        // eslint-disable-next-line no-undef
        include: path.resolve(__dirname, "../lib/")
      }
    ]
  },
  resolve: {
    extensions: [".js"]
  }
};
