module.exports = {
  // publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  // outputDir: process.env.outputDir,
  devServer: {
    host: "0.0.0.0",
    proxy: {
      '/api': {
        target: process.env.VUE_APP_BASE_API,
        changeOrigin: true,
        secure: false,
        pathRewrite: {
          // 路径重写
          "^/api": "" // 这个意思就是以api开头的，定向到哪里, 如果你的后边还有路径的话， 会自动拼接上
        }
      },
      '/wf': {
        target: 'http://wf.dev.leshare.com',
        changeOrigin: true,
        secure: false,
        pathRewrite: {
          // 路径重写
          "^/wf": "" // 这个意思就是以api开头的，定向到哪里, 如果你的后边还有路径的话， 会自动拼接上
        }
      }
    },
    // host: "emc.dev.leshare.com",
    port: 4300,
  }
}