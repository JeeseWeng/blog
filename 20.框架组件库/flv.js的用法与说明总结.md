# flv.js 的用法与说明总结

[Flv.js 全面解析](https://blog.csdn.net/An1090239782/article/details/108972491)

## 什么是 Flv.js ？

是 HTML5 Flash 视频（FLV）播放器，纯原生 JavaScript 开发，没有用到 Flash。由 bilibili 网站开源。+

概览：一个实现了在 HTML5 视频中播放 FLV 格式视频的 JavaScript 库。它的工作原理是将 FLV 文件流转码复用成 ISO BMFF（MP4 碎片）片段，然后通过 Media Source Extensions 将 MP4 片段喂进浏览器。flv.js 是使用 ECMAScript 6 编写的，然后通过 Babel Compiler 编译成 ECMAScript 5，使用 Browserify 打包。功能：FLV 容器，具有 H.264 + AAC 编解码器播放功能多部分分段视频播放 HTTP FLV 低延迟实时流播放 FLV 通过 WebSo
