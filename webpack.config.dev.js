var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');

module.exports = {
    devtool: 'eval',
    entry: [
        'webpack-dev-server/client?http://localhost:3004',
        'webpack/hot/dev-server',
        './src/index'
    ],
    output: {
        path: path.join(__dirname, 'dist'), //path to where webpack will build your stuff
        filename: 'bundle.js',
        publicPath: '/' // This is used to generate URLs to e.g. images
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['babel'],
                exclude: /node_modules/
            },
            {
                test: /(\.css)$/,
                loaders: ['style', 'css']
            },
            {
                test: /\.html$/,
                loader: 'file-loader?name=[name].[ext]'
            },
            {
                test: /\.scss$/,
                loaders: ["style", "css", "sass", "postcss"]
            },
            {
                test: /\.(ttf|eot|svg|woff(2)?)(\S+)?$/,
                loader: 'file-loader?name=fonts/[name].[ext]'
            },
            {test: /\.(png|jpg|gif)$/, loader: 'file-loader?name=images/[name].[ext]'}
        ],
        postcss: [ autoprefixer({ browsers: ['last 2 versions'] }) ]
    }
};