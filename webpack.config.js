const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CompressionPlugin = require('compression-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

require('dotenv').config()
const mode = process.env.ENV

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'js/app.[contentHash].js',
    },
    module: {
        rules: [
            {
                test: /\.js|jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react', '@babel/preset-env'],
                        plugins: ['@babel/plugin-proposal-optional-chaining'],
                    }
                }
            },
            {
                test: /\.(s*)css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    'css-loader',
                    'sass-loader',
                    // 'style-loader'
                ],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'static/images/[hash].[ext]',
                        },
                    },
                ],
            }
        ],
    },
    plugins: mode === 'production' ? [
        new CleanWebpackPlugin(),
        new CompressionPlugin(),
        new HtmlWebpackPlugin({
            title: 'App Title',
            template: 'public/index.html',
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[hash].css',
        }),
    ] : [
            new HtmlWebpackPlugin({
                title: 'App Title',
                template: 'public/index.html',
            }),
            new MiniCssExtractPlugin({
                filename: 'css/[name].[hash].css',
            }),
        ],

    devtool: false,
    devServer: {
        historyApiFallback: true,
        contentBase: path.join(__dirname, 'public'),
        compress: true,
        useLocalIp: true,
        host: '0.0.0.0',
        port: 9000,
    },
}