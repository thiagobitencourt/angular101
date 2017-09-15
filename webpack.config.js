const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const packageJson = require('./package.json');

let config = {
    entry: './src/app/app.module.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            },
            { 
                test: /\.html$/, 
                loader: 'html-loader',
                exclude: [
                  /index\.html$/
                ]
            },
            {
                test: /\.scss$/,
                use: ['css-hot-loader'].concat(ExtractTextWebpackPlugin.extract({
                  use: ['css-loader', 'sass-loader'],
                  fallback: 'style-loader'
                }))
            },
            { 
                test: /\.(png|woff|woff2|eot|ttf|svg)$/, 
                loader: 'url-loader?limit=100000'
            }      
        ]
    },
    plugins: [
        new ExtractTextWebpackPlugin('styles.css'),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            title: packageJson.name,
            version: packageJson.version
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        })
    ],
    devServer: {
        contentBase: path.resolve(__dirname, './dist'), // A directory or URL to server HTML content from.
        historyApiFallback: true, // fallback to /index.html for Single Page Applications.
        inline: true, // inline mode (set to false to disable including client scripts (like livereload))
        open: true // open default browser while lauching
    },
    devtool: 'eval'
}

module.exports = config;
