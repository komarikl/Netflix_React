const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {

    //context: path.join(__dirname, 'src-ts'),
    context: path.join(__dirname, 'src-js'),

    entry: {
        index: [
            'react-hot-loader/patch',
            'webpack-dev-server/client?http://localhost:3000',
            './index',
        ],
        styles: './styles/styles.less'
    },

    output: {
        path: path.join(__dirname, "built"),
        filename: '[name].js',
    },

    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
    },

    devServer: {
        historyApiFallback: true,
        hot: true,
        port: 4300
    },

    module: {
        rules: [{
                test: /\.tsx?$/,
                loaders: [
                    "react-hot-loader/webpack",
                    "awesome-typescript-loader"
                ],

            }, {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader',
                ],
            },
            {
				test: /\.less$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: ['css-loader', 'less-loader']
				})
			},
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            camelCase: true,
                            localIdentName: '[path][name]__[local]--[hash:base64:5]',
                        },
                    }, {
                        loader: 'typed-css-modules-loader',
                        options: {
                            camelCase: true,
                            outDir: './built/css-modules'
                        },
                    }
                ]
            }
        ]
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new HtmlWebpackPlugin({
            title: 'Test',
            hash: true,
            template: './index.html'
        }),
		new ExtractTextPlugin({
			filename: 'styles.css',
			allChunks: true
		}),
    ],
};