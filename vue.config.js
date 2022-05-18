/***
 *    vue.config.js 是一个可选的配置文件，如果项目的 (和 package.json 同级的)
 *  根目录中存在这个文件，那么它会被 @vue/cli-service 自动加载。你也可以使用
 *  package.json 中的 vue 字段，但是注意这种写法需要你严格遵照 JSON 的格式来写。
 *
 */

// 使用defineConfig来自 的助手@vue/cli-service，它可以提供更好的智能感知支持：//!会报错，可能是因为这个插件是vue3在用的，不兼容vue2，升级最新版脚手架也不行
// const { defineConfig } = require('@vue/cli-service')

const CompressionPlugin = require('compression-webpack-plugin')

module.exports = {
  // 公共路径
  publicPath: './',
  // 输出目录
  outputDir: 'dist',
  // 生成的静态文件存放目录
  assetsDir: 'static',
  // 生成的静态文件名包含哈希，以控制缓存，但是index.html是cli自动生成的
  filenameHashing: false,
  // 再生产构建是禁用eslint-loader
  lintOnSave: process.env.NODE_ENV !== 'production',
  devServer: {
    port: '10086', // 指定监听请求的端口号：
    // 指向开发环境 API 服务器的字符串
    proxy: {
      '/api': {
        target: 'http://localhost:10020', // 请求本地 需要运维后台项目
        pathRewrite: { '^/api': '' }, // 如果不传递/api,需要重写路径
        secure: false // 默认情况下，将不接受在 HTTPS 上运行且证书无效的后端服务器。 如果需要，可以这样修改配置
        // ws: true   // 设置 'ws' 或者 'sockjs' 是一个设置 devServer.client.webSocketTransport 和 devServer.webSocketServer 的快捷方式。
        // changeOrigin: true   // 默认情况下代理会保留主机头的来源，如果想要隐藏的话，可以使用下边的配置
      }
    }
    // proxy: [   // 如果想让多个特定路径代理到同一目标，则可以使用一个或多个带有 context 属性的对象的数组：
    //   {
    //     context:  ['/api', '/admin'],
    //     target:'http://localhost:10020'
    //   }
    // ]
  },
  // 打包时不生成.map文件 避免看到源码
  productionSourceMap: false,
  // 部署优化
  configureWebpack: {
    //
    resolve: {
      alias: {
        components: '@/components',
        content: '@/components/content',
        common: '@/common',
        assets: '@/assets',
        network: '@/network',
        views: '@/views',
        libs:'@/libs',
        layout:'@/layout'
      }
    },
    // 使用CDN
    // externals: { // !打开的时候会报错，提示vue is defined
    //   // 防止将某些 import 的包(package)打包到 bundle 中，而是在运行时(runtime)再去从外部获取这些扩展依赖(external dependencies)。
    //   vue: 'Vue',
    //   'vue-i18n': 'VueI18n',
    //   axios: 'axios',
    //   'vue-router': 'VueRouter',
    //   vuex: 'Vuex',
    //   iview: 'iview',
    //   echarts: 'echarts',
    //   apexcharts: 'ApexCharts',
    //   'vue-apexcharts': 'VueApexCharts',
    //   xlsx: 'XLSX',
    //   dplayer: 'DPlayer',
    //   gitalk: 'Gitalk'
    // },
    // GZIP压缩
    plugins: [
      new CompressionPlugin({
        test: /\.js$|\.html$|\.css/, // 匹配文件
        threshold: 10240 // 对超过10k文件压缩
      })
    ]
  }
}
