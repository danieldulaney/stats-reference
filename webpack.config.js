module.exports = {
	entry: './src/main.js',
	output: {
		filename: './dist/bundle.js',
	},
	resolve: {
		extensions: ['.js', '.vue'],
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader',
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
			},
		],
	},
}

