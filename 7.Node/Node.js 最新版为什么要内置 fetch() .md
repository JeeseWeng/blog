# Node.js 最新版为什么要内置 fetch()

## 前言

Node.js 在最新版本中引入了 fetch(), fetch() 是一种流行的跨平台 HTTP 客户端 API，可在浏览器和 Web/Service Workers 中运行，目前在 v17.5.0 版本为试验性支持，也就是说，在今后的 LTS 版本中如果正式支持了，今后将不再需要额外的 HTTP 请求模块。

## fetch()是什么?

fetch() API 提供了一个 WHATWG 标准化接口来获取资源，它是一个基于 Promise 的 HTTP 客户端，支持许多高级 HTTP 功能，同时还专注于最常见的场景：发送简化的 HTTP 请求。

Fetch API 的核心包含四个接口：

- fetch()- 用于发起请求的入口点
- Headers 类- 处理 HTTP 请求/响应标头
- Request 类 - 表示请求
- Response 类 - 表示响应

例子：

```
async function() {
    const res = await fetch('https://example/api/list');
    const json = await res.json();
    console.log(json);
}
```

标准化的好处在于，其使用方式与浏览器中使用 Fetch API 一致。

## 为什么要用 fetch()？

在 Node.js 中使用 fetch() 的主要原因有两个：

- Node.js 社区中有一场激烈的讨论，讨论如何以客户端开发者熟悉的方式发展 Node 的 HTTP 堆栈，同时又能与服务器编程模型配合，如何超越目前作为核心部分的 HTTP 模型的限制，以及如何支持 HTTP/2-3 而不过度加重用户的负担，而 fetch() 正是这一对话的第一步。
- 该 fetch() 实现基于 Undici，这是一个新的快速、可靠且符合规范的 HTTP/1.1 客户端，由于 Undici 摒弃了一些过时的 HTTP 原语并直接构建在 sockets 之上，因此与现有实现相比，fetch() 可以显著减少延迟和增加吞吐量。

## 怎么用 fetch()？

目前 Node.js 17.5 中的 fetch() 是一项实验性的功能，运行脚本时需要需要添加 --experimental-fetch，即可在脚本内使用 fetch()。
