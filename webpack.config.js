const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: [
        '/index.js',
    ],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.sass$/,
                use: [
                    'style-loader',
                    "css-loader",
                    "sass-loader"
                ],
            },
            {
                test: /\.(png|jpeg|jpg|gif|svg)$/,
                use: ['file-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html',
        }),
        new CleanWebpackPlugin(),
    ],
};