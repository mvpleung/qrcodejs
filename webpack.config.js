var path = require("path");
var webpack = require("webpack");

module.exports = {
  entry: "./qrcode.js",
  output: {
    path: path.resolve(__dirname, './'),
    publicPath: '/',
    filename: 'qrcode.min.js'
  }
};

// http://vue-loader.vuejs.org/en/workflow/production.html
module.exports.plugins = (module.exports.plugins || []).concat([
	new webpack.optimize.UglifyJsPlugin({
	  sourceMap: true,
	  compress: {
		warnings: false
	  }
	}),
	new webpack.LoaderOptionsPlugin({
	  minimize: true
	})
])