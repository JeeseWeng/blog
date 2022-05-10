# <center></center>

## 前言

productionSourceMap 设置的作用是：在 vue.config.js 设置之后，生成 map 文件，map 文件的作用在于：项目打包后，代码都是经过压缩加密的，如果运行时报错，输出的错误信息无法准确得知是哪里的代码报错。也就是说 map 文件相当于是查看源码的一个东西。如果不需要定位问题，并且不想被看到源码，就把 productionSourceMap 置为 false，既可以减少包大小，也可以加密源码。

```
// vue.config.js or config/index.js or config.js
module.exports = {
  publicPath: './', // 基本路径
  outputDir: 'dist', // 输出文件目录
  assetsDir: './assets',
  indexPath: 'index.html',
  filenameHashing: true, // 生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存
  lintOnSave: false, // eslint-loader 是否在保存的时候检查
  productionSourceMap: true, // 生产环境是否生成 sourceMap 文件
}

```
