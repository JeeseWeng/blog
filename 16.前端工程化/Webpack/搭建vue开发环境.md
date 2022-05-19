<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

**Table of Contents** _generated with [DocToc](https://github.com/thlorenz/doctoc)_

- [搭建 vue 开发环境](#%E6%90%AD%E5%BB%BA-vue-%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83)
  - [前言](#%E5%89%8D%E8%A8%80)
  - [一、搭建 webpack 基本环境](#%E4%B8%80%E6%90%AD%E5%BB%BA-webpack-%E5%9F%BA%E6%9C%AC%E7%8E%AF%E5%A2%83)
    - [（一）初始化项目](#%E4%B8%80%E5%88%9D%E5%A7%8B%E5%8C%96%E9%A1%B9%E7%9B%AE)
    - [（二）安装 webpack](#%E4%BA%8C%E5%AE%89%E8%A3%85-webpack)
    - [（三）测试一下 webpack 是否安装成功](#%E4%B8%89%E6%B5%8B%E8%AF%95%E4%B8%80%E4%B8%8B-webpack-%E6%98%AF%E5%90%A6%E5%AE%89%E8%A3%85%E6%88%90%E5%8A%9F)
  - [二、开始配置功能](#%E4%BA%8C%E5%BC%80%E5%A7%8B%E9%85%8D%E7%BD%AE%E5%8A%9F%E8%83%BD)
    - [（一）基础配置](#%E4%B8%80%E5%9F%BA%E7%A1%80%E9%85%8D%E7%BD%AE)
    - [（二）配置 ES6/7/8 转 ES5 代码](#%E4%BA%8C%E9%85%8D%E7%BD%AE-es678-%E8%BD%AC-es5-%E4%BB%A3%E7%A0%81)
    - [（三）配置 scss 转 css](#%E4%B8%89%E9%85%8D%E7%BD%AE-scss-%E8%BD%AC-css)
    - [（四）配置 postcss 实现自动添加 css3 前缀](#%E5%9B%9B%E9%85%8D%E7%BD%AE-postcss-%E5%AE%9E%E7%8E%B0%E8%87%AA%E5%8A%A8%E6%B7%BB%E5%8A%A0-css3-%E5%89%8D%E7%BC%80)
    - [（四）使用 html-webpack-plugin 来创建 html 页面](#%E5%9B%9B%E4%BD%BF%E7%94%A8-html-webpack-plugin-%E6%9D%A5%E5%88%9B%E5%BB%BA-html-%E9%A1%B5%E9%9D%A2)
    - [（五）配置 devServer 热更新功能](#%E4%BA%94%E9%85%8D%E7%BD%AE-devserver-%E7%83%AD%E6%9B%B4%E6%96%B0%E5%8A%9F%E8%83%BD)
    - [（六）配置 webpack 打包 图片、媒体、字体等文件](#%E5%85%AD%E9%85%8D%E7%BD%AE-webpack-%E6%89%93%E5%8C%85-%E5%9B%BE%E7%89%87%E5%AA%92%E4%BD%93%E5%AD%97%E4%BD%93%E7%AD%89%E6%96%87%E4%BB%B6)
  - [三、让 webpack 识别.vue 文件](#%E4%B8%89%E8%AE%A9-webpack-%E8%AF%86%E5%88%ABvue-%E6%96%87%E4%BB%B6)
    - [（一）安装需要的依赖文件](#%E4%B8%80%E5%AE%89%E8%A3%85%E9%9C%80%E8%A6%81%E7%9A%84%E4%BE%9D%E8%B5%96%E6%96%87%E4%BB%B6)
    - [（二）修改 webpack.config.js 配置](#%E4%BA%8C%E4%BF%AE%E6%94%B9-webpackconfigjs-%E9%85%8D%E7%BD%AE)
    - [（三）例子](#%E4%B8%89%E4%BE%8B%E5%AD%90)
  - [四、定义环境变量](#%E5%9B%9B%E5%AE%9A%E4%B9%89%E7%8E%AF%E5%A2%83%E5%8F%98%E9%87%8F)
  - [五、区分生产环境和开发环境](#%E4%BA%94%E5%8C%BA%E5%88%86%E7%94%9F%E4%BA%A7%E7%8E%AF%E5%A2%83%E5%92%8C%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83)
    - [（一）开发环境](#%E4%B8%80%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83)
    - [（二）生产环境](#%E4%BA%8C%E7%94%9F%E4%BA%A7%E7%8E%AF%E5%A2%83)
    - [（三）开发环境配置](#%E4%B8%89%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83%E9%85%8D%E7%BD%AE)
    - [（四）生产环境配置](#%E5%9B%9B%E7%94%9F%E4%BA%A7%E7%8E%AF%E5%A2%83%E9%85%8D%E7%BD%AE)
    - [（五）修改 package.json](#%E4%BA%94%E4%BF%AE%E6%94%B9-packagejson)
  - [六、打包分析](#%E5%85%AD%E6%89%93%E5%8C%85%E5%88%86%E6%9E%90)
  - [七、集成 VueRouter 和 Vuex](#%E4%B8%83%E9%9B%86%E6%88%90-vuerouter-%E5%92%8C-vuex)
    - [（一）集成 Vue-Router](#%E4%B8%80%E9%9B%86%E6%88%90-vue-router)
    - [（二）配置路由懒加载](#%E4%BA%8C%E9%85%8D%E7%BD%AE%E8%B7%AF%E7%94%B1%E6%87%92%E5%8A%A0%E8%BD%BD)
    - [（三）集成 Vuex](#%E4%B8%89%E9%9B%86%E6%88%90-vuex)
  - [八、总结](#%E5%85%AB%E6%80%BB%E7%BB%93)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# 搭建 vue 开发环境

## 前言

开发 vue 项目的时候，相信大部分人都是使用 vue-cli 脚手架生成的项目架构，然后 npm run install 安装依赖，npm run serve 启动项目然后就开始写业务代码了。但是对项目里的 webpack 封装和配置了解的不清楚，容易导致出问题不知如何解决，或者不会通过 webpack 去扩展新功能。

该篇文章主要是想告诉小伙伴们，如何一步一步的通过 webpack4 来搭建自己的 vue 开发环境

首先我们要知道 vue-cli 生成的项目，帮我们配置好了哪些功能？

1. ES6 代码转换成 ES5 代码
2. scss/sass/less/stylus 转 css
3. .vue 文件转换成 js 文件
4. 使用 jpg、png、font 等资源文件
5. 自动添加 css 各浏览器产商的前缀
6. 代码热更新
7. 资源预加载
8. 每次构建代码清除之前生成的代码
9. 定义环境变量
10. 区分开发环境打包跟生产环境打包

## 一、搭建 webpack 基本环境

webpack 官网：https://webpack.js.org/

### （一）初始化项目

在命令行中执行 npm init 然后一路回车就行了，主要是生成一些项目基本信息。最后会生成一个 package.json 文件

```
npm init
```

### （二）安装 webpack

```
npm install webpack webpack-cli -D
```

### （三）测试一下 webpack 是否安装成功

1. 新建一个 src 文件夹，然后再建一个 main.js 文件

```
// src/main.js
console.log('hello webpack')
```

2. 然后在 package.json 下面加一个脚本命令

```
"scripts": {
    "serve": "webpack ./src/main.js --mode development",
},
```

3. 然后运行该命令

```
npm run serve
```

## 二、开始配置功能

### （一）基础配置

1. 新建一个 build 文件夹，用来存放 webpack 配置相关的文件
2. 在 build 文件夹下新建一个 webpack.config.js，配置 webpack 的基本配置
3. 修改 webpack.config.js 配置

```
// build/webpack.config.js
const path = require('path')
module.exports = {
    // 指定打包模式
    mode: 'development',
    entry: {
        // 配置入口文件
        main: path.resolve(__dirname, '../src/main.js')
    },
    output: {
        // 配置打包文件输出的目录
        path: path.resolve(__dirname, '../dist'),
        // 生成的js文件名称
        filename: 'js/[name].[hash:8].js',
        // 生成的chunk名称
        chunkFilename: 'js/[name].[hash:8].js',
        // 资源引用的路径
        publicPath: "./"
    }
}
```

4. 修改 package.json 文件，将之前添加的 serve 修改为

```
"serve": "webpack ./src/main.js --config ./build/webpack.config.js"
```

### （二）配置 ES6/7/8 转 ES5 代码

1. ES6/7/8 语法 转 ES5 代码

- （1）安装相关依赖
- （2）修改 webpack.config.js 配置
- （3）在项目根目录添加一个 babel.config.js 文件
- （4）然后执行 npm run serve 命令，可以看到 ES6 代码被转成了 ES5 代码了

2. ES6/7/8 Api 转 es5

   babel-loader 只会将 ES6/7/8 语法转换为 ES5 语法，但是对新 api 并不会转换。我们可以通过 babel-polyfill 对一些不支持新语法的客户端提供新语法的实现。

- （1）安装

```
npm install @babel/polyfill
```

- （2）修改 webpack.config.js 配置

在 entry 中添加 @babel-polyfill

```
entry: {
    // 配置入口文件
    main: [
        "@babel/polyfill",
        path.resolve(__dirname, '../src/main.js')
    ]
},
```

3. 按需引入 polyfill

   `@babel/polyfill`和`polyfill`配置一个就可以

- （1）安装相关依赖

```
npm install core-js@2 @babel/runtime-corejs2 -S
```

- （2）修改 babel-config.js

```
module.exports = {
    presets: [
        [
            "@babel/preset-env", {
                "useBuiltIns": "usage"
            }
        ]
    ]
}
```

配置了按需引入 polyfill 后，用到 es6 以上的函数，babel 会自动导入相关的 polyfill，这样能大大减少 打包编译后的体积

### （三）配置 scss 转 css

在没配置 css 相关的 loader 时，引入 scss、css 相关文件打包的话，会报错

1. 安装相关依赖

```
npm install sass-loader dart-sass css-loader style-loader -D
```

- sass-loader, dart-sass 主要是将 scss/sass 语法转为 css
- css-loader 主要是解析 css 文件
- style-loader 主要是将 css 解析到 html 页面 的 style 上

2. 修改 webpack.config.js 配置

```
module: {
    rules: [
        {
            test: /\.(scss|sass)$/,
            use: [
                {
                    loader: 'style-loader'
                },
                {
                    loader: 'css-loader'
                },
                {
                    loader: 'sass-loader',
                    options: {
                        implementation: require('dart-sass')
                    }
                }
            ]
        }
    ]
}
```

### （四）配置 postcss 实现自动添加 css3 前缀

1. 安装相关依赖

```
npm install postcss-loader autoprefixer -D
```

2. 修改 webpack.config.js 配置

```
module: {
    rules: [
        {
            test: /\.(scss|sass)$/,
            use: [
                {
                    loader: 'style-loader'
                },
                {
                    loader: 'css-loader'
                },
                {
                    loader: 'sass-loader',
                    options: {
                        implementation: require('dart-sass')
                    }
                },
                {
                    loader: 'postcss-loader'
                }
            ]
        }
    ]
}
```

3. 在项目根目录下新建一个 postcss.config.js

```
// postcss.config.js
module.exports = {
    plugin: {
        autoprefixer: {}
    }
}
```

### （四）使用 html-webpack-plugin 来创建 html 页面

使用 html-webpack-plugin 来创建 html 页面，并自动引入打包生成的 js 文件

1. 安装依赖

```
npm install html-webpack-plugin -D
```

2. 新建一个 public/index.html 页面

```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
</head>
<body>
  <div id="app"></div>
</body>
</html>
```

3. webpack-config.js 配置

```
// build/webpack.config.js
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    // 指定打包模式
    mode: 'development',
    entry: {
        // ...
    },
    output: {
        // ...
    },
    module: {
        // ...
    },
    plugin: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../public/index.html')
        })
    ]
}
```

### （五）配置 devServer 热更新功能

通过代码的热更新功能，我们可以实现不刷新页面的情况下，更新我们的页面

1. 安装依赖

```
npm install webpack-dev-server -D
```

2. 修改 webpack.config.js 配置

   通过配置 devServer 和 HotModuleReplacementPlugin 插件来实现热更新

```
// build/webpack.config.js
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = {
    // 指定打包模式
    mode: 'development',
    entry: {
        // ...
    },
    output: {
        // ...
    },
    module: {
        // ...
    },
    devServer: {
        hot: true,
        port: 3000,
        contentBase: './dist'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../public/index.html')
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    optimization: {
        moduleIds: 'named'
    }
}
```

### （六）配置 webpack 打包 图片、媒体、字体等文件

1. 安装依赖

```
npm install file-loader url-loader -D
```

- file-loader 解析文件 url，并将文件复制到输出的目录中
- url-loader 功能与 file-loader 类似，如果文件小于限制的大小。则会返回 base64 编码，否则使用 file-loader 将文件复制到输出的目录中

2. 修改 webpack-config.js 配置 添加 rules 配置，分别对 图片，媒体，字体文件进行配置

```
// build/webpack.config.js
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = {
    // ...
    module: {
        rules: [
            // ...
            {
                test: /\.(jpe?g|png|gif)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 4096,
                            fallback: {
                                loader: 'file-loader',
                                options: {
                                    name: 'img/[name].[hash:8].[ext]'
                                }
                            }
                        }
                    }
                ]
            },
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 4096,
                            fallback: {
                                loader: 'file-loader',
                                options: {
                                    name: 'media/[name].[hash:8].[ext]'
                                }
                            }
                        }
                    }
                ]
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 4096,
                            fallback: {
                                loader: 'file-loader',
                                options: {
                                    name: 'fonts/[name].[hash:8].[ext]'
                                }
                            }
                        }
                    }
                ]
            }
        ]
    }
}
```

## 三、让 webpack 识别.vue 文件

### （一）安装需要的依赖文件

```
npm install vue-loader vue-template-compiler cache-loader thread-loader -D
npm install vue -S
```

- vue-loader 用于解析.vue 文件
- vue-template-compiler 用于编译模板
- cache-loader 用于缓存 loader 编译的结果
- thread-loader 使用 worker 池来运行 loader，每个 worker 都是一个 node.js 进程。

### （二）修改 webpack.config.js 配置

```
// build/webpack.config.js
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const { VueLoaderPlugin } = require('vue-loader')
// const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    // ...
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: [
                    {
                        loader: 'cache-loader'
                    },
                    {
                        loader: 'thread-loader'
                    },
                    {
                        loader: 'vue-loader',
                        options: {
                            compilerOptions: {
                                preserveWhitespace: false
                            }
                        }
                    }
                ]
            },
            {
                test: /\.jsx?$/,
                use: [
                    {
                        loader: 'cache-loader'
                    },
                    {
                        loader: 'thread-loader'
                    },
                    {
                        loader: 'babel-loader'
                    }
                ]
            }
        ]
    },
    resolve: {
        alias: {
            vue$: 'vue/dist/vue.runtime.esm.js'
        }
    },
    plugins: [
        new VueLoaderPlugin()
    ]
}
```

### （三）例子

1. 在 src 新建一个 App.vue

```
// src/App.vue
<template>
  <div class="App">
    Hello World
  </div>
</template>

<script>
export default {
  name: 'App',

  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.App {
  color: skyblue;
}
</style>
```

2. 修改 main.js

```
import Vue from 'vue'
import App from './App.vue'

new Vue({
  render: h => h(App)
}).$mount('#app')
```

3. 运行一下

```
npm run serve
```

## 四、定义环境变量

通过 webpack 提供的 DefinePlugin 插件，可以很方便的定义环境变量

```
plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        VUE_APP_BASE_URL: JSON.stringify('http://localhost:3000')
      }
    }),
]
```

## 五、区分生产环境和开发环境

新建两个文件

- webpack.dev.js 开发环境使用
- webpack.prod.js 生产环境使用
- webpack.config.js 公用配置
- 开发环境与生产环境的不同

### （一）开发环境

1. 不需要压缩代码
2. 需要热更新
3. css 不需要提取到 css 文件
4. sourceMap

### （二）生产环境

1. 压缩代码
2. 不需要热更新
3. 提取 css，压缩 css 文件
4. sourceMap 为 false
5. 构建前清除上一次构建的内容

- 安装所需依赖

```
npm i @intervolga/optimize-cssnano-plugin mini-css-extract-plugin clean-webpack-plugin webpack-merge copy-webpack-plugin -D
```

1. @intervolga/optimize-cssnano-plugin 用于压缩 css 代码
2. mini-css-extract-plugin 用于提取 css 到文件中
3. clean-webpack-plugin 用于删除上次构建的文件
4. webpack-merge 合并 webpack 配置
5. copy-webpack-plugin 用户拷贝静态资源

### （三）开发环境配置

- build/webpack.dev.js

```
// build/webpack.dev.js
const merge = require('webpack-merge')
const webpackConfig = require('./webpack.config')
const webpack = require('webpack')
module.exports = merge(webpackConfig, {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  module: {
    rules: [
      {
        test: /\.(scss|sass)$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2
            }
          },
          {
            loader: 'sass-loader',
            options: {
              implementation: require('dart-sass')
            }
          },
          {
            loader: 'postcss-loader'
          }
        ]
      },
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development')
      }
    }),
  ]
})

```

- webpack.config.js

```
// build/webpack.config.js
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports = {
  entry: {
    // 配置入口文件
    main: path.resolve(__dirname, '../src/main.js')
  },
  output: {
    // 配置打包文件输出的目录
    path: path.resolve(__dirname, '../dist'),
    // 生成的 js 文件名称
    filename: 'js/[name].[hash:8].js',
    // 生成的 chunk 名称
    chunkFilename: 'js/[name].[hash:8].js',
    // 资源引用的路径
    publicPath: '/'
  },
  devServer: {
    hot: true,
    port: 3000,
    contentBase: './dist'
  },
  resolve: {
    alias: {
      vue$: 'vue/dist/vue.runtime.esm.js'
    },
    extensions: [
      '.js',
      '.vue'
    ]
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'cache-loader'
          },
          {
            loader: 'vue-loader',
            options: {
              compilerOptions: {
                preserveWhitespace: false
              },
            }
          }
        ]
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader'
      },

      {
        test: /\.(jpe?g|png|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 4096,
              fallback: {
                loader: 'file-loader',
                options: {
                  name: 'img/[name].[hash:8].[ext]'
                }
              }
            }
          }
        ]
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 4096,
              fallback: {
                loader: 'file-loader',
                options: {
                  name: 'media/[name].[hash:8].[ext]'
                }
              }
            }
          }
        ]
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 4096,
              fallback: {
                loader: 'file-loader',
                options: {
                  name: 'fonts/[name].[hash:8].[ext]'
                }
              }
            }
          }
        ]
      },
    ]
  },
  plugins: [
    new VueLoaderPlugin(),

    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../public/index.html')
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ]
}
```

### （四）生产环境配置

```
const path = require('path')
const merge = require('webpack-merge')
const webpack = require('webpack')
const webpackConfig = require('./webpack.config')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssnanoPlugin = require('@intervolga/optimize-cssnano-plugin');
/*   clean-webpack-plugin 3.0 以上的版本需要使用对象结构  */
// const CleanWebpackPlugin = require('clean-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
module.exports = merge(webpackConfig, {
  mode: 'production',
  devtool: '#source-map',
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          name: 'chunk-vendors',
          test: /[\\\/]node_modules[\\\/]/,
          priority: -10,
          chunks: 'initial'
        },
        common: {
          name: 'chunk-common',
          minChunks: 2,
          priority: -20,
          chunks: 'initial',
          reuseExistingChunk: true
        }
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.(scss|sass)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2
            }
          },
          {
            loader: 'sass-loader',
            options: {
              implementation: require('dart-sass')
            }
          },
          {
            loader: 'postcss-loader'
          }
        ]
      },
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: 'production'
      }
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css'
    }),
    new OptimizeCssnanoPlugin({
      sourceMap: true,
      cssnanoOptions: {
        preset: [
          'default',
          {
            mergeLonghand: false,
            cssDeclarationSorter: false
          }
        ]
      }
    }),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../public'),
        to: path.resolve(__dirname, '../dist')
      }
    ]),
    new CleanWebpackPlugin()
  ]
})
```

### （五）修改 package.json

```
"scripts": {
    "serve": "webpack-dev-server --config ./build/webpack.dev.js",
    "build": "webpack --config ./build/webpack.prod.js"
},
```

## 六、打包分析

有的时候，我们需要看一下 webpack 打包完成后，到底打包了什么东西，这时候就需要用到这个模块分析工具了 webpack-bundle-analyzer

1. 安装依赖

```
npm install --save-dev webpack-bundle-analyzer
```

2. 修改 webpack.prod.js 配置，在 plugins 属性中新增一个插件

在开发环境中，我们是没必要进行模块打包分析的，所以我们将插件配置在了生产环境的配置项中

```
// ...
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin
module.exports = merge(webpackConfig, {
    mode: 'production',
    devtool: '#source-map',
    // ...
    plugins: [
        new BundleAnalyzerPlugin({
            analyzerMode: 'static'
        })
    ]
})


```

3. 运行打包命令

```
npm run build
// or
yarn build
```

## 七、集成 VueRouter 和 Vuex

首先是安装相关依赖

```
npm install vue-router vuex --save
```

### （一）集成 Vue-Router

1. 新增视图组件 在 src 目录下新增两个视图组件 src/views/Home.vue 和 src/views/About.vue

```
// src/views/Home.vue
<template>
  <div class="Home">
    <h2>Home</h2>
  </div>
</template>

<script>
export default {
  name: 'Home',

  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
</style>
```

About.vue 内容跟 Home.vue 差不多，将里面的 Home 换成 About 就 OK 了

2. 新增路由配置文件

在 src 目录下新增一个 router/index.js 文件

```
// src/router/index.js
import Vue from 'vue'
import VueRouter from "vue-router";
import Home from '../views/Home';
import About from '../views/About';
Vue.use(VueRouter)
export default new VueRouter({
  mode: 'hash',
  routes: [
    {
      path: '/Home',
      component: Home
    },
    {
      path: '/About',
      component: About
    },
    {
      path: '*',
      redirect: '/Home'
    }
  ]
})
```

3. 修改 main.js 文件

```
// main.js
import Vue from 'vue'
import App from './App.vue'
import router from './router'

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
```

4. 修改 App.vue 组件

```
// App.vue
// 在 template 中添加
// src/App.vue
<template>
  <div class="App">
    Hello World
  </div>
  <div>
      // router-link 组件 用来导航到哪个路由
      <router-link to="/Home">go Home</router-link>
      <router-link to="/About">go About</router-link>
    </div>
    <div>
      // 用于展示匹配到的路由视图组件
      <router-view></router-view>
    </div>
</template>

<script>
export default {
  name: 'App',

  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.App {
  color: skyblue;
}
</style>
```

运行 npm run serve 命令，如没配置错误，是可以看到点击不同的路由，会切换到不同的路由视图

### （二）配置路由懒加载

在没配置路由懒加载的情况下，我们的路由组件在打包的时候，都会打包到同一个 js 文件去，当我们的视图组件越来越多的时候，就会导致这个 js 文件越来越大。然后就会导致请求这个文件的时间变长，最终影响用户体验

1. 安装依赖
   ```
   npm install @babel/plugin-syntax-dynamic-import --save-dev
   ```
2. 修改 babel.config.js

   ```
   module.exports = {
    presets: [
      [
        "@babel/preset-env",
        {
          useBuiltIns: "usage"
        }
      ]
    ],
    plugins: [
      // 添加这个
      '@babel/plugin-syntax-dynamic-import'
    ]
   }
   ```

3. 修改 router/index.js 路由配置文件

```
import Vue from 'vue'
import VueRouter from "vue-router";
Vue.use(VueRouter)
export default new VueRouter({
  mode: 'hash',
  routes: [
    {
      path: '/Home',
      component: () => import(/* webpackChunkName: "Home" */ '../views/Home.vue')
      // component: Home
    },
    {
      path: '/About',
      component: () => import(/* webpackChunkName: "About" */ '../views/About.vue')
      // component: About
    },
    {
      path: '*',
      redirect: '/Home'
    }
  ]
})
```

4. 运行命令 npm run build 查看是否生成了 Home...js 文件 和 About...js 文件

### （三）集成 Vuex

1. 在 src 目录下新建一个 store/index.js 文件

```
// store/index.js
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const state = {
  counter: 0
}
const actions = {
  add: ({commit}) => {
    return commit('add')
  }
}
const mutations = {
  add: (state) => {
    state.counter++
  }
}
const getters = {
  getCounter (state) {
    return state.counter
  }
}
export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters
})
```

2. 修改 main.js 文件 导入 vuex

```
// main.js
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'  // ++
new Vue({
  router,
  store,    // ++
  render: h => h(App)
}).$mount('#app')
```

3. 修改 App.vue ，查看 vuex 配置效果

```
// App.vue
<template>
  <div class="App">
    <div>
      <router-link to="/Home">go Home</router-link>
      <router-link to="/About">go About</router-link>
    </div>
    <div>
      <p>{{getCounter}}</p>
      <button @click="add">add</button>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'App',
  data() {
    return {};
  },
  computed: {
    ...mapGetters(['getCounter'])
  },
  methods: {
    ...mapActions(['add'])
  }
};
</script>
<style lang="scss" scoped>
.App {
  text-align: center;
  color: skyblue;
  font-size: 28px;
}
</style>
```

4. 运行命令 npm run serve

当点击按钮的时候，可以看到我们的 getCounter 一直在增加

## 八、总结

特别需要注意版本的使用方法，包括 webpack 的版本，这里是 webpack4，vue 的版本为 2 版本，一些使用方法不同。
