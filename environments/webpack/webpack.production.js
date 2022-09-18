/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const { merge } = require("webpack-merge")
const common = require("./webpack.common")

const webpack = require("webpack")
const TerserPlugin = require("terser-webpack-plugin")


module.exports = merge(common, {
  mode: "production",
  devtool: "inline-source-map",
  devServer: {
    historyApiFallback: true,
    open: true,
    hot: true,
    port: 8081
  },
  optimization: {
    moduleIds: "deterministic",
    runtimeChunk: {
      name: "manifest",
    },
    splitChunks: {
      cacheGroups: {
        vendors: {
          test: /node_modules\/(?!antd\/).*/,
          name: "vendors",
          chunks: "all",
        },
        // This can be your own design library.
        antd: {
          test: /node_modules\/(antd\/).*/,
          name: "antd",
          chunks: "all",
        },
      },
    },
    minimize: true,
    minimizer: [
      new TerserPlugin({
        test: /\.js(\?.*)?$/i
      }),
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production")
      },
    }),
  ],
})
