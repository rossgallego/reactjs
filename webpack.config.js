'use strict';

var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	// entry: "./src/js/app.js",
	// entry: "./src/js/jsx/index.jsx",

	entry: "./src/js/app.jsx",
	// entry: "./src/js/components/todo3redux/main.jsx",

	output: {
		path: __dirname + "/dist",
		filename: "bundle.js"
	},
	plugins: [ 
		new webpack.ProvidePlugin({
			$: "jquery",
			jQuery:"jquery"
		}),
		new HtmlWebpackPlugin({
			template: './index.html'
		})
	],
	module: {
		rules: [
			{
				test: /\.scss$/,
				loaders: "style-loader!css-loader!sass-loader"
			},
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel-loader',
				query: 
				{
					presets: ['es2015']
				}
			},
			{
				test: /\.(png|jpg)$/,
				loaders: 'url-loader'
			},
			{
				test: /\.(svg)$/,
				loader: 'file-loader'
			},
			{
				test: /\.html$/,
				loader: "html-loader"
			},
			{
				test: /\.jsx?$/,         // Match both .js and .jsx files
				exclude: /node_modules/, 
				loader: "babel-loader", 
				query:
				{
					presets:['es2015','react']
				}
			}
		]
	},
	devServer : {
		contentBase: './',
		stats: 'minimal',
		port: 9000
	}
}