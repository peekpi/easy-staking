module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
      ? '/easy-staking/dist/'
      : '/',
    productionSourceMap: process.env.NODE_ENV === 'production'
      ? false : true
}