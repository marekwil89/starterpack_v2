const WriteFilePlugin = require('write-file-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/js/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new WriteFilePlugin()
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  },
  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /\.js/
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader", 
          "css-loader", 
          "sass-loader" 
        ]
      },
    ]
  }
};
