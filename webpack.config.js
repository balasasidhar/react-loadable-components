const { resolve } = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: process.env.NODE_ENV || "none",
  devServer: {
    contentBase: resolve(__dirname, "dist"),
    port: 9000,
    historyApiFallback: true,
    hot: true,
    open: "http://localhost:9000"
  },
  devtool: "source-map",
  entry: resolve(__dirname, "src", "index.js"),
  output: {
    filename: "bundle.[hash].js",
    path: resolve(__dirname, "dist"),
    publicPath: ""
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader"
      },
      {
        test: /\.html$/,
        use: "html-loader"
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HTMLWebpackPlugin({
      template: resolve(__dirname, "src", "index.html"),
      filename: "./index.html"
    })
  ],
  resolve: {
    extensions: [".js", ".jsx"]
  }
};
