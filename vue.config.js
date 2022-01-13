const path = require('path');

module.exports = {

  devServer: {
    port: 8080,
    open: true,
    // proxy: {
    //   '/api': {
    //     target: process.env.VUE_APP_BASE_API,
    //     changeOrigin: true,
    //     secure: false,
    //     pathRewrite: {
    //       // 路径重写
    //       "^/api": "" // 这个意思就是以api开头的，定向到哪里, 如果你的后边还有路径的话， 会自动拼接上
    //     }
    //   }
    // },
  },
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      console.log('为生产环境修改配置');
      // 为生产环境修改配置...
    } else {
      // 为开发环境修改配置...
      console.log('为开发环境修改配置');
    }                                                                                                                         
  }
}