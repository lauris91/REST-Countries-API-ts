module.exports = {
  output: { filename: '[name].js' },
  mode: 'development',
  devServer: {
    // static: path.join(__dirname, './src'),
    port: 3000,
    hot: 'only',
    historyApiFallback: true,
    compress: true,
    open: true,
  },
  devtool: 'eval',
}
