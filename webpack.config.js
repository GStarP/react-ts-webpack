const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: {
    app: './src/index.ts'
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js'
  },
  resolve: {
    // allow ignoring suffix when import
    extensions: ['.js', '.ts', '.tsx']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: 'ts-loader'
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use : ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [new HTMLWebpackPlugin({ template: './static/index.html' })],
  devServer: {
    port: 3000,
    open: true
  }
}