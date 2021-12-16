const HtmlWebpackPlugin = require("html-webpack-plugin")
const base = require('./webpack.config.base.js')
const path = require("path")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
  ...base,
  mode: "production",


  devtool: "inline-source-map",
  devServer: { contentBase: "./dist" },

  
  plugins: [
    ...base.plugins,
    // new HtmlWebpackPlugin({ template: "src/assets/index.html" }),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
      chunkFilename: "[id].[contenthash].css",
      ignoreOrder: false,
    }),
  ],
  module: {
    rules: [
      ...base.module.rules,
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: "../",
            },
          },
          "css-loader",
        ],
      },
    ],
  },
}
