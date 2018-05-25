var webpack = require("webpack");
var path = require('path');

module.exports = {
	entry: "./src/index.js",
	output: {
		path: "dist/assets",
		filename: "bundle.js",
		publicPath: "assets"
	},
	devServer: {
		inline: true,
		contentBase: './dist',
		port: 4000,
		devtool: 'eval',
		hot: true,
		historyApiFallback: true
	},
	module: {
		loaders: [
				{
					test: /\.js$/,
					exclude: /(node_modules)/,
					loader: ["babel-loader"],
					query: {
						presets: ["latest", "stage-0", "react"]
					}
				},
				{
							test: /\.json$/,
							exclude: /(node_modules)/,
							loader: "json-loader"

					},
					{
							test: /\.css$/,
							loader: 'style-loader!css-loader!autoprefixer-loader'
					},
					{
							test: /\.scss$/,
							loader: 'style-loader!css-loader!autoprefixer-loader!sass-loader'
					},
					{
					 test: /\.less$/,
						 use: [
								 { loader: "style-loader" },
								 { loader: "css-loader" },
								 { loader: "less-loader" }
						 ]
			 	 	},
			 		{
                test: /\.html$/,
                loader: "html"
          },
					{
              test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/,
              loader: 'url-loader?limit=10000'
          },
					{
              test: /\.(eot|ttf|wav|mp3)$/,
              loader: 'file-loader'
          }
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	]
}
