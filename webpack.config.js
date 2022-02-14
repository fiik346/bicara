const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: [
		'./src/index.js',
		'./src/scss/main.scss'
	],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/bundle.js',
  },
	module: {
		rules: [
			{
				test: /\.(scss)$/,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
					},
					{
						loader: 'postcss-loader',
						options: {
							postcssOptions: {
								plugins: function(){
                return [                                            require('auto-prefixer')                        	]
	              }
							}
						}
					},
					'sass-loader',
				],
			}
		]
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: 'css/style.css',
			chunkFilename: '[name].css'
		}),
	],
	watchOptions: {
  	poll: true,
  	ignored: /node_modules/
}
};
