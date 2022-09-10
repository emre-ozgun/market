/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path")

const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const CompressionPlugin = require("compression-webpack-plugin")


module.exports = {
  entry: [path.resolve(__dirname, "../../src/index.tsx")],
  devtool: "inline-source-map",
  output: {
    path: path.resolve(__dirname, "../../dist"),
    assetModuleFilename: 'images/[hash][ext][query]',
    filename: "[name].[fullhash].js",
    chunkFilename: "[name].[fullhash].js",
    publicPath: "/"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
    assetFilter: function (assetFilename) {
      return assetFilename.endsWith(".js.gz");
    },
  },
  stats: {
    errors: false
  },
  module: {
    rules: [{
      test: /\.tsx?$/,
      loader: "babel-loader",
      exclude: "/node_modules/"
    },
    {
      test: /\.css$/i,
      use: [
        "style-loader", "css-loader", "less-loader"
      ]
    },
    {
      test: /\.less$/,
      use: [
        {
          loader: "style-loader",
        },
        {
          loader: "css-loader",
        },
        {
          loader: "less-loader",
          options: {
            lessOptions: {
              javascriptEnabled: true
            },
          }
        }
      ]
    },
    {
      test: /\.(png|svg|jpg|jpeg|gif)$/i,
      type: 'asset/resource',
    },
    {
      test: /\.(woff|woff2|eot|ttf|otf)$/i,
      type: 'asset/resource',
    }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "styles/[name].[contenthash].css",
      chunkFilename: "[id].[contenthash].css"
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      favicon: "./src/favicon.ico"
    }),
    new CompressionPlugin({
      test: /\.js(\?.*)?$/i,
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: "static",
      openAnalyzer: false
    })
  ],
}