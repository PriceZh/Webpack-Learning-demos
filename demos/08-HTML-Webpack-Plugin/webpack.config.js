var HtmlwebpackPlugin = require('html-webpack-plugin');
var path = require('path');
module.exports = {
  entry: './main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist')
  },
  plugins: [
    new HtmlwebpackPlugin({
      title: 'Webpack-demos',
      filename: 'index-test.html',
      template: 'test.html',
    }),
  ]
};
