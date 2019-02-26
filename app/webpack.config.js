const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = process.env.NODE_ENV !== 'production';
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = (env) => {
  const plugins = [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "css/[name].css"
    })
  ]

  if (env.NODE_ENV === 'production') {
    plugins.push(
      new CleanWebpackPlugin(['dist'], {root: __dirname})
    )
  }

  return {
    mode: 'production',
    entry: {
      home: path.resolve(__dirname, 'src/entries/home.js'),
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'js/[name].js',
      publicPath: path.resolve(__dirname, 'dist') + '/',
      chunkFilename: 'js/[id].[chunkhash].js',
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /(node_modules)/,
          use: ['babel-loader']
        },
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
            'css-loader',
            'sass-loader',
          ],
        },
        {
          test: /\.(jpg|jpeg|png|gif)$/,
          use: {
            loader: 'url-loader',
            options: {
              limit: 100000, // bytes
              fallback: 'file-loader',
              name: 'images/[name].[ext]',
            }
          }
        }
      ],
    },
    plugins
  }
}