module.exports = {
  // 基本路径
  publicPath: '/',

  // 输出文件目录
  outputDir: 'dist',

  // 静态资源目录 (相对于 outputDir)
  assetsDir: 'assets',

  // 是否在开发环境下通过 eslint-loader 在每次保存时 lint 代码
  lintOnSave: process.env.NODE_ENV !== 'production',

  // 是否使用包含运行时编译器的 Vue 构建版本
  runtimeCompiler: false,
    // 是否为 CSS 开启 source map
  sourceMap: false,
    // 向 CSS 相关 loader 传递选项
  loaderOptions: {
    css: {},
    postcss: {
        plugins: [
        require('autoprefixer')
        ]
    }
  },
  // 生产环境 sourceMap
  productionSourceMap: false,
  // css相关配置
  css: {
    // 是否使用css分离插件 ExtractTextPlugin
    extract: true,
    // 开启 CSS source maps?
    sourceMap: false,
    // css预设器配置项
    loaderOptions: {
      css: {},
      postcss: {}
    },
    // 启用 CSS modules for all css / pre-processor files.
    requireModuleExtension: true
  },
  // webpack-dev-server 相关配置
  devServer: {
    open: true, // 是否自动打开浏览器
    host: '0.0.0.0', // 允许外部访问
    port: 8080, // 端口
    https: false, // 是否使用https
    hotOnly: false, // 热更新
    proxy: {
      '/api': {
        target: 'http://localhost:3000', // 代理的目标地址
        changeOrigin: true,
        pathRewrite: {
          '^/api': '' // 重写路径
        }
      }
    }
  },

  // webpack 配置
  configureWebpack: {
    // 自定义配置
  },

  // 链式操作 webpack 配置
  chainWebpack: config => {
    // 自定义配置
  }
}