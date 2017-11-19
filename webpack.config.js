'use strict';

const path = require('path')

module.exports = {
    entry: './src/index',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public'),
        publicPath: '/'
    },
    devServer: {
        contentBase: './public',
        historyApiFallback: true
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
        ]
    }
};