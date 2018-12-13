const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "build.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      { test: /\.js/, use: "babel-loader" },
      {
        test: /\.jpg/,
        use: {
          loader: "file-loader",
          options: {
            name: "/[path][hash].[ext]"
          }
        }
      }
    ]
  }
};
