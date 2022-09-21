const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: './src/index.tsx',
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: 'bundle.js',
	},
	externals: {
		React: 'react',
	},
	module: {
		rules: [
			{
				test: /\.(js|ts)x?$/,
				exclude: /node_modules/,
				use: ['babel-loader'],
			},
		],
	},
	resolve: {
		extensions: ['.js', 'jsx', '.tsx', '.ts'],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'public/index.html',
		}),
	],
	devServer: {
		static: {
			directory: path.resolve(__dirname, './dist'),
		},
	},
};
