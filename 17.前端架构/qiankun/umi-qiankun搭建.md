# umi-qiankun 微前端架构搭建

## 前言

github 源码地址：

## 一、父主框架的搭建

1. 新建项目

   ```
   yarn create @umijs/umi-app
   ```

2. 下载依赖
   ```
   yarn
   ```
3. 在 packjson 的 devDependencies 中添加 qiankun 依赖
   ```
   yarn add @umijs/plugin-qiankun --dev
   // 或 npm install @umijs/plugin-qiankun --save
   ```
4. 父应用.umirc.ts 中配置

   Umi 在 .umirc.ts 或 config/config.ts 中配置项目和插件
   推荐在 .umirc.ts 中写配置。如果配置比较复杂需要拆分，可以放到 config/config.ts 中，并把配置的一部分拆出去，比如路由。两者二选一，.umirc.ts 优先级更高。

```
import { defineConfig } from 'umi';

export default defineConfig({
  dva: {},
  qiankun: {
    master: {
      // 注册子应用信息
      apps: [
        {
          name: 'child1', // 唯一 id
          entry: '//localhost:2000', // html entry
          // 子应用通过钩子函数的参数props可以拿到这里传入的值
          props: {},
        },
        {
          name: 'child2', // 唯一 id
          entry: '//localhost:7100', // html entry
          // 子应用通过钩子函数的参数props可以拿到这里传入的值
          props: {},
        },
      ],
      jsSandbox: true, // 是否启用 js 沙箱，默认为 false
      prefetch: true, // 是否启用 prefetch 特性，默认为 true
    },
  },
  // layout: {},
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      exact: false,
      path: '/',
      component: '@/layouts/index',
      routes: [
        {
          exact: true,
          path: '/test',
          component: '@/pages/test',
          title: 'test',
        },
        { exact: true, path: '/child1', microApp: 'child1' },
        { exact: true, path: '/child2', microApp: 'child2' },
      ],
    },
  ],
});
```

## 二、子应用搭建

1. 新建项目

   ```
   yarn create @umijs/umi-app
   ```

2. 下载依赖
   ```
   yarn
   ```
3. package.json 添加 name 字段
   ```
   {
       name: 'child"
   }
   ```
4. 在 packjson 的 devDependencies 中添加 qiankun 依赖

   （有的教程说不用再下载，使用之后发现是错误的）如果不下载会报`invalid key: qiankun`错误

   ```
   yarn add @umijs/plugin-qiankun --dev
   ```

5. 子应用.umirc.ts 中配置，qiankun 插件注册

   ```
   export default {
    qiankun: {
    },
   };
   ```

6. src/app.ts 目录下新建 app.ts

   运行时配置文件，可以在这里扩展运行时的能力，比如修改路由、修改 render 方法等。

   ```
   // src/app.ts
   export const qiankun = {
    // 应用加载之前
    async bootstrap(props: any) {
        console.log('app1 bootstrap', props);
    },
    // 应用 render 之前触发
    async mount(props: any) {
        console.log('app1 mount', props);
    },
    // 应用卸载之后触发
    async unmount(props: any) {
        console.log('app1 unmount', props);
    },
   };
   ```

## 三、总结

### （一）最后可以通过页面链接路由进行各个子应用的跳转

### （二）遇到的问题

1. invalid key: qiankun

   有的教程说子应用不用再下载 umi-qiankun，使用之后发现是错误的，会报`invalid key: qiankun`的错误，需要加载

2. 子应用安装 @umijs/plugin-qiankun 之后，需要在 umirc.js 文件中配置
3. 配置后启动报 `You should have name in package.json`提示 package.json 文件需要配置 name。
