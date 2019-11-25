const path = require('path');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
    entry: {
        bundle_base: './bundle_base.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.html$/,
                loader: "file?name=[path][name].[ext]"
            },
            // JQuery $輸出為全域變數
            {
                test: require.resolve('jquery'),
                loader: 'expose-loader?$!expose-loader?jQuery'
            },
            { //scss
                test: /\.(scss|sass|css)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    'resolve-url-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            },
            {
                test: /\.(gif|png|jpg|eot|wof|woff|woff2|ttf|svg)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 10000, //bytes
                        name: '[name].[ext]',
                        outputPath: './src/img'
                    }
                }
            }
        ]
    },
    plugins: [

        // new ExtractTextPlugin({
        //     filename: '[name].css',
        //     disable: false,
        //     allChunks: true
        // }),
        new MiniCssExtractPlugin({
            filename: "test-trulayer.css"
        }),
        new CopyWebpackPlugin([
            // {
            //     from: './src/css/**.css'
            // },
            {
                from: './src/img/**'
            },
            {
                from: './index.html'
            },
            // {
            //     from: './src/lib/**'
            // }
        ], {
            copyUnmodified: true
        })
    ]
}