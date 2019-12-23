const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpackBaseConf = require('./webpack.base.conf.js');
//const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const rimraf = require('rimraf');
const merge = require('webpack-merge');

rimraf('./dist/sites/', function (err) {
    if (err) console.log(err);
});

rimraf('./dist/lightui.js', function (err) {
    if (err) console.log(err);
});

rimraf('./dist/lightui.css', function (err) {
    if (err) console.log(err);
});

rimraf('./dist/lightui.js.map', function (err) {
    if (err) console.log(err);
});

rimraf('./dist/lightui.css.map', function (err) {
    if (err) console.log(err);
});

module.exports = merge(webpackBaseConf, {
    mode: 'production',
    devtool: 'source-map',
    entry: {
        lightui: './src/lightui.js',
    },
    externals: {
        'vue': {
            root: 'Vue',
            commonjs: 'vue',
            commonjs2: 'vue',
            amd: 'vue'
        }
    },
    output: {
        path: path.resolve(__dirname, '../dist/'),
        filename: 'lightui.js',
        library: 'lightui',
        libraryTarget: 'umd',
        globalObject: 'this',
        umdNamedDefine: true
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css'
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        })
    ],
    optimization: {
        minimize: false
    }
});