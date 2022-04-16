<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [ajax 和 axios 区别及优缺点](#ajax-和-axios-区别及优缺点)
  - [一、ajax](#一ajax)
    - [（一）什么是 ajax？](#一什么是-ajax)
    - [（二）ajax 的原理？](#二ajax-的原理)
    - [（三）ajax 的优点？](#三ajax-的优点)
    - [（四）ajax 的缺点？](#四ajax-的缺点)
    - [（五）ajax 适用场景](#五ajax-适用场景)
    - [（六）ajax 不适用场景](#六ajax-不适用场景)
    - [（七）ajax 的请求步骤](#七ajax-的请求步骤)
    - [（八）代码](#八代码)
  - [二、axios](#二axios)
    - [（一）axios 是什么？](#一axios-是什么)
    - [（二）axios 有那些特性？](#二axios-有那些特性)
  - [三、axios 和 ajax 的区别：](#三axios-和-ajax-的区别)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# ajax 和 axios 区别及优缺点

## 一、ajax

### （一）什么是 ajax？

Ajax 是对原生 XHR 的封装，为了达到我们跨越的目的，增添了对 JsonP 的支持。异步的 javascript 和 xml，ajax 不是一门新技术，而是多种技术的组合，用于快速的创建动态页面，能够实现无刷新更新数据从而提高用户体验。

百度百科：

Ajax 即 Asynchronous Javascript And XML（异步 JavaScript 和 XML）在 2005 年被 Jesse James Garrett 提出的新术语，用来描述一种使用现有技术集合的‘新’方法，包括: HTML 或 XHTML, CSS, JavaScript, DOM, XML, XSLT, 以及最重要的 XMLHttpRequest。使用 Ajax 技术网页应用能够快速地将增量更新呈现在用户界面上，而不需要重载（刷新）整个页面，这使得程序能够更快地回应用户的操作。

### （二）ajax 的原理？

由客户端请求 ajax 引擎，再由 ajax 引擎请求服务器，服务器作出一系列响应之后返回给 ajax 引擎，由 ajax 引擎决定将这个结果写入到客户端的什么位置。实现页面无刷新更新数据。

### （三）ajax 的优点？

1. 无刷新更新数据
2. 异步与服务器通信
3. 前端和后端负载平衡
4. 基于标准被广泛支持
5. 界面与应用分离

### （四）ajax 的缺点？

1. ajax 不能使用 Back 和 history 功能，即对浏览器机制的破坏
2. 安全问题 ajax 暴露了与服务器交互的细节
3. 对收索引擎的支持比较弱
4. 破坏程序的异常处理机制
5. 违背 URL 和资源定位的初衷
6. ajax 不能很好的支持移动设备
7. 太多客户端代码造成开发上的成本

### （五）ajax 适用场景

1. 表单驱动的交互
2. 深层次的树的导航
3. 快速的用户与用户间的交流响应
4. 类似投票、yes/no 等无关痛痒的场景
5. 对数据进行过滤和操纵相关数据的场景
6. 普通的文本输入提示和自动完成的场景

### （六）ajax 不适用场景

1. 部分简单的表单
2. 搜索
3. 基本的导航
4. 替换大量的文本
5. 对呈现的操纵

### （七）ajax 的请求步骤

1. 创建 XMLHttpRequest 异步对象
2. 设置参数与回调函数：请求方式（get/post）、请求地址 url、数据 data、回调函数 success 和 error
3. 使用 open 方法与服务器建立连接
4. 向服务器发送数据
5. 在回调函数中针对不同的响应状态进行处理

### （八）代码

```
$.ajax({
  type: 'POST',
  url: url,
  data: data,
  dataType: dataType,
  success: function () {},
  error: function () {}
});
```

## 二、axios

### （一）axios 是什么？

axios 是一个基于 Promise 的 HTTP 库，可以用在浏览器和 node.js 中；是请求资源的模块；通过 promise 对 ajax 的封装。

### （二）axios 有那些特性？

1. 在浏览器中创建 XMLHttpRequests
2. 在 node.js 则创建 http 请求
3. 支持 Promise API
4. 支持拦截请求和响应
5. 转换请求和响应数据
6. 取消请求
7. 自动转换成 JSON 数据格式
8. 客户端支持防御 XSRF（跨站请求伪造）

## 三、axios 和 ajax 的区别：

axios 是通过 Promise 实现对 ajax 技术的一种封装，就像 jquery 对 ajax 的封装一样。

简单来说就是 ajax 技术实现了局部数据的刷新，axios 实现了对 ajax 的封装，有promise等功能，axios 有的 ajax 都有，ajax 有的 axios 不一定有。
