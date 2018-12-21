const webpack = require('webpack');
const ExtractCssChunks = require('extract-css-chunks-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        publicPath: '/',
        filename: 'index.js',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    ExtractCssChunks.loader,
                    'css-loader'
                ]
            },
            // {
            //     test: /\.(jpg|jpeg|png|svg|ttf|woff|woff2|eot)$/,
            //     use: ['file-loader']
            // }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new ExtractCssChunks({
            filename: 'style.css',
            chunkFilename: '[id].css',
            hot: true,
        })
    ],
    devServer: {
        port: 8888,
        hot: true,
    }
};
