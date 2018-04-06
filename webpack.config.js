const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack"); /* Needed for jquery */

module.exports = {
	entry: ['./src/js/index.js', './src/scss/main.scss'], 
	devServer: {
proxy: {
  "/api": "http://localhost:3000"
}
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      },
	  {
            test: /\.(scss)$/,
    use: [{
      loader: 'style-loader', // inject CSS to page
    }, {
      loader: 'css-loader', // translates CSS into CommonJS modules
    }, {
      loader: 'postcss-loader', // Run post css actions
    }, {
      loader: 'sass-loader' // compiles Sass to CSS
    }]
	  }
    ]
  },
  
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
	new webpack.ProvidePlugin({ /* Make sure webpack is defined above */
            $: "jquery",
            jQuery: "jquery"
        })
  ]
};