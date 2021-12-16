
const base = require('./webpack.config.base.js')

module.exports = {
  ...base,

  mode: "development",

  module: {
    rules: [
      ...base.module.rules,
      {
        // test: /\.css$/,
        // use: ["style-loader", "css-loader"],
      },
    ],
  },
}
