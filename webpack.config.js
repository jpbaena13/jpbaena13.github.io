const path = require('path');

const componentName = 'unc-react-popup';

module.exports = {
  entry: './' + componentName + '/index.js',
  output: {
    path: path.resolve(__dirname, componentName),
    filename: 'app.bundle.js'
  },
  module: {
    rules: [
      {
        test:/\.jsx?$/,
        exclude: /(node_modules)/,
        use: [ 'babel-loader', 'eslint-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader','css-loader']
      },
      {
        test: /\.modernizrrc\.js$/,
        exclude: /(node_modules)/,
        loader: "webpack-modernizr-loader"
      }
    ]
  },
  resolve: {
    alias: {
      modernizr$: path.resolve(__dirname, ".modernizrrc.js")
    }
  },
  target: 'web',
  mode: 'development'
}
