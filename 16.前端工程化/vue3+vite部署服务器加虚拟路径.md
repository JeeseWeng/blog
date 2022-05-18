# vue3+vite 部署服务器加虚拟路径

## 一、vite 设置部署的访问路径

vite 打包的前端项目默认只能通过根目录访问项目，比如 http://localost:3000/，如果加上一个路径在进行访问会导致资源文件访问 404

### 解决办法：

```
// 设置vite.config.js
export default defineConfig({
  base: './'
})
```

这样将打包的项目放置在任意目录下都可以正常，当然也可以设置指定的访问路径，比如

```
base: '/test'
```

## 二、api 请求地址

### （一）http.ts

```
axios.defaults.baseURL = '/szldapp'
```

### （二）vite proxy

```
proxy: {
    '/szldapp': {
    target: 'http://192.168.72.143:18085/',
    changeOrigin: true,
    rewrite: (path) => path.replace(/^\/szldapp/, ''),
    },
}
```
