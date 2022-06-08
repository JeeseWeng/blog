# VUE3 与 VUE2 ⽣命周期的对⽐

VUE3.0 中对 VUE2.0 的写法是完全兼容的，你也可以在 setup 之外写 VUE2.0 的⽣命周期函数。但是建议尽量使用 VUE3 的生命周期。

| Vue2          | vue3            |
| ------------- | --------------- |
| beforeCreate  | setup()         |
| created       | setup()         |
| beforeMount   | onBeforeMount   |
| mounted       | onMounted       |
| beforeUpdate  | onBeforeUpdate  |
| updated       | onUpdated       |
| beforeDestroy | onBeforeUnmount |
| destroyed     | onUnmounted     |
| activated     | onActivated     |
| deactivated   | onDeactivated   |
| errorCaptured | onErrorCaptured |

通过这样对⽐，可以很容易的看出 vue3 的钩⼦函数基本是再 vue2 的基础上加了⼀个 on,但也有两个钩⼦函数发⽣了变化。
BeforeDestroy 变成了 onBeforeUnmount；destroyed 变成了 onUnmounted。

尤⼤神的介绍是 mount ⽐ Destroy 更形象，也和 beforeMount 相对应。
