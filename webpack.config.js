const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    context: __dirname,
    entry: [
      './src/js/index.js'],
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'main.js'
    },
    devServer: {  
      static: './dist',
      compress: true,  
      port: 8080
    }, 
    devtool: 'source-map', 
    module: {
      rules: [	
        { 
          test: /\.js$/i,
          exclude: /(node_modules)/,
          use: { 
            loader: 'babel-loader', 
            options: {
            presets: ['@babel/preset-env']
          }}
        },
        { 
          test: /\.css$/i, 
          use: [ 'style-loader', 'css-loader' ]		
        }]
    },
    plugins: [  
        new webpack.HotModuleReplacementPlugin(),
        new webpack.ProvidePlugin(
            { 
              jQuery: 'jquery', 
              $: 'jquery', 
              jquery: 'jquery' 
            }), 
            new HtmlWebpackPlugin({
              template: './index.html',
            })
    ],
}
  