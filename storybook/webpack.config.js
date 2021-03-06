'use strict'

const webpackConfig = require('@kadira/storybook/dist/server/config/defaults/webpack.config.js')

module.exports = function (config, env) {
  const newConfig = webpackConfig(config, env)

  newConfig.module.preLoaders = (newConfig.module.preLoaders || []).concat({
    test: /\.js$/,
    exclude: /node_modules/,
    loader: 'standard'
  })

  // newConfig.module.loaders = (newConfig.module.loaders || []).concat({
  //   test: /\.css$/,
  //   exclude: /node_modules/,
  //   // include: /src/,
  //   loaders: ['style', 'css?modules']
  // })

  // newConfig.module.loaders.map((loader) => {
  //   if (!loader.test) {
  //     console.log(loader)
  //   }
  // })

  return newConfig
}
