const isProduction = process.env.NODE_ENV === 'production';
module.exports = {
  publicPath: isProduction
    ? '/easy-staking/dist/'
    : '/',
  productionSourceMap: isProduction
    ? false : true,
  configureWebpack: config => {
    if (isProduction)
      config.externals = {
        'vue': 'Vue',
        'vuex': 'Vuex',
        'axios': 'axios'
      }
  },
  /*
  chainWebpack: config => {
    config
      .plugin('webpack-bundle-analyzer')
      .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
  }*/
}