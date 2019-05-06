module.exports = {
  baseUrl: process.env.NODE_ENV === 'production' ? '/Fee-web/' : '/',
  devServer: {
    port: 9527
  }
}