const path = require('path')

const mode = process.env.NODE_ENV || 'development'

module.exports = {
	entry: './src/index.js',
	module: {
		rules: [
			{
				test: /\.js$/,
				use: 'babel-loader'
			}
		]
	},
	output: {
		path: path.join(__dirname, 'build'),
		filename: 'index.js'
	},
	mode
}
