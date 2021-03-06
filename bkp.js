const path = require('path');
const webpack = require('webpack');

const config = {
  entry: './src/app/app.module.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'app.module.js'
  },
  module: {
    rules: [
        {
            test: /\.js$/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015']
            }
        }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
  ],
  devServer: {
    contentBase: path.resolve(__dirname, './dist'), // A directory or URL to server HTML content from.
    historyApiFallback: true, // fallback to /index.html for Single Page Applications.
    inline: true, // inline mode (set to false to disable including client scripts (like livereload))
    open: true // open default browser while lauching
  },
  devtool: 'eval'
};

module.exports = config;