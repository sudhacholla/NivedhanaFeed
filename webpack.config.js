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
		historyApiFallback: true,
		
	},
	module: {
		loaders: [
        {
              test: /\.jsx?$/,
              loader: 'babel',
              query: {
                cacheDirectory: true,
                plugins: ['transform-decorators-legacy' ,'transform-class-properties','react-html-attrs'],
                presets: ['es2015', 'stage-0', 'react']
              }
        },
        ]
      },
      plugins:   [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false })
      ]
}
