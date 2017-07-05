const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

console.log('========', __dirname);

module.exports = {
    entry: [
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        './src/index.js'
    ],

    module: {
        loaders: [{
            test: /\.js?$/,
            exclude: /node_modules/,
            loaders: ['react-hot-loader/webpack', 'babel']
        }, {
            test: /\.js$/, // include .js files
            enforce: "pre", // preload the jshint loader
            exclude: /node_modules/, // exclude any and all files in the node_modules folder
            loader: "jsxhint-loader"
        }, {
            test: /\.css$/,
            loaders: [ 'style-loader', 'css-loader' ]
        }]
    },

    output: {
        path: __dirname + '/public',
        publicPath: '/',
        filename: 'app.js'
    },

    devServer: {
        contentBase: __dirname + '/public',
        hot: true
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            inject: true
        })
    ],

    // more options in the optional jshint object
    jshint: {
        // any jshint option http://www.jshint.com/docs/options/
        // i. e.
        camelcase: true,

        // jshint errors are displayed by default as warnings
        // set emitErrors to true to display them as errors
        emitErrors: true,

        // jshint to not interrupt the compilation
        // if you want any file with jshint errors to fail
        // set failOnHint to true
        failOnHint: false,
        eqeqeq: true,
        curly: true,
        esversion: 6
    }
};
