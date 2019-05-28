module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/Fee-web/' : '/',
  devServer: {
    port: 9527
  }
}