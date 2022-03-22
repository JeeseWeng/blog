# sass、less、stylus 样式穿透方法

## 1、stylus 的样式穿透 使用 >>>

```
.wrapper >>> .swiper-pagination-bullet-active
   background: #fff
```

## 2、sass 和 less 的样式穿透 使用 /deep/

```
// 语法
外层 /deep/ 第三方组件 {
    样式
}

// eg
.wrapper /deep/ .swiper-pagination-bullet-active{
    background: #fff;
}
```
