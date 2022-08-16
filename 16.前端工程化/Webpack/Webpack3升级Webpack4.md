<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [<center>Webpack3升级Webpack4</center>](#centerwebpack3升级webpack4center)
  - [一、需求背景](#一需求背景)
  - [二、升级效果（有详细的数据支撑）](#二升级效果有详细的数据支撑)
  - [三、升级过程](#三升级过程)
  - [四、遇到的问题](#四遇到的问题)
  - [五、总结](#五总结)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# <center>Webpack3升级Webpack4</center>
## 一、需求背景

由于历史的原因，老旧的项目普遍使用webpack3自动化构建工具，随着项目的不断迭代开发，这会使项目的编译、构建速度越来越慢，导致大大地降低前端的开发效率，随着新技术webpack5的面世以及webpack4的成熟，考虑到项目的稳定性之后决定使用webpack4来对原有项目的webpack3进行升级改造，从而使前端项目顺应技术发展的主流，大大减少项目的编译时间以及打包时间，而且通过拆包优化配置，大大地提高前端开发效率以及用户体验。

## 二、升级效果（有详细的数据支撑）

1. 编译效果：首次编译时间81s → 48s
2. 热更新时间：文件修改热更新编译时间2.4s -> 1.3s
3. 打包时间：项目打包时间83s → 39s
4. 页面性能：

页面性能检测工具采用Lighthouse: 可见优化前首屏渲染时间需要31s->9.4s，页面可交互时间40.7s->15.5s， 总阻塞时间从1.14s → 0.39s, 总体来说性能约提升了300%, 很好地提升了用户体验。

总结：可以通过数据对比得出，webpack4相对于webpack3，编译时间以及打包时间都提高了50%左右，并且随着项目越大，这个编译打包效率还会更高。

## 三、升级过程
## 四、遇到的问题
## 五、总结