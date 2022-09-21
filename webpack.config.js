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
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: 'asset/resource',
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/i,
				type: 'asset/resource',
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
