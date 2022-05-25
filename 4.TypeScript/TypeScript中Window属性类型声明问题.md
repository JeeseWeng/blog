# TypeScript 中 Window 属性类型声明问题

## 发生情景：

在页面开发中，注入了全局的 window 对象方法，例如 SDK 等，提示报错信息，并且打包的时候报错。

## 现象：

在做 vue+typescript 开发过程，给 window 对象添加属性并赋值，却发现报错，如类型“Window & typeof globalThis”上不存在属性“gspZc”。

## 原因：

原则上，TypeScript 需要开发者做到先声明后使用。这就导致开发者在调用很多原生接口（浏览器、Node.js）或者第三方模块的时候，因为某些全局变量或者对象的方法并没有声明过，导致编译器的类型检查失败。

通常情况下，我们给 window 对象赋值，只需求 window.propoerty = 'xxx'，但是在此处编译器或者检查器，并不认识 window 是个什么东东，所以给出了错误提示。

我这里我们只需要在某个\*.d.ts 声明下即可，declare 的意思告诉编译器我知道 Window 是啥类型，它会跟全局下的 Window 类型自动合并。

## 解决方法：

### 方法一：

window 作为任意参数进行使用，直接把 window 断言成 any 绕过去

```
(window as any).xxx
```

### 方法二：

```
// *.d.ts文件中
declare interface Window {
  gspZc: any
}
```

d.ts 大名叫 TypeScript Declaration File，存放一些声明，类似于 C/C++的.h 头文件（#include <stdio.h>）

### 方法三：

定义第二个 MyWindow 类型并且继承于 Window 进行使用

```
interface MyWindow extends Window {
    xxx(): void;
}

declare var window: MyWindow;
```
