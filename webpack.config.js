const { merge } = require('webpack-merge')

// const CopyPlugin = require('copy-webpack-plugin')
const commonConfig = require('./config/webpack.common')

module.exports = ({ env }) => {
  const config = require(`./config/webpack.${env}`)
  return merge(commonConfig, config)
}
