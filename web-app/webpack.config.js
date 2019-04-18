const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');


module.exports = {
    entry: {
        babelpolyfill: 'babel-polyfill',
        index: './src/index.js',
        indexController: './src/controllers/IndexController.js',
        portfolioController:'./src/controllers/PortfolioController.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist/bundle'),
        filename: '[name].bundle.js'
    },
    optimization: {
       /* splitChunks: {
            chunks:'all'
        },*/
        minimizer: [
            new UglifyJsPlugin({
                uglifyOptions: {
                    output: {
                        comments: false
                    }
                }
            }),
            new OptimizeCSSAssetsPlugin({})
        ]
        
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "css.css"
        })
    ],
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
            {
                test: /\.css$/,
                use: [
                    { loader: MiniCssExtractPlugin.loader },
                    { loader: "css-loader" }
                ]
            },
           /* {
                test: /\.css$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" }
                ]
            }
            {
                test: /\.css$/,
                use: [
                    { loader: "style-loader/url" },
                    { loader: "file-loader" }
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            }*/
            {
                test: /\.(scss)$/,
                use: [{
                    loader: MiniCssExtractPlugin.loader, // inject CSS to page
                }, {
                    loader: 'css-loader', // translates CSS into CommonJS modules
                }, {
                    loader: 'postcss-loader', // Run postcss actions
                    options: {
                        plugins: function () { // postcss plugins, can be exported to postcss.config.js
                            return [
                                require('autoprefixer')
                            ];
                        }
                    }
                }, {
                    loader: 'sass-loader' // compiles Sass to CSS
                }]
            }
        ]
    }

    ,
    devServer: {
        contentBase: './dist',
        port: 9000
    }
};