const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  output: { filename: '[name].[fullhash].js' },
  mode: 'production',
  plugins: [new CleanWebpackPlugin()],
  devtool: false,
}
