# 最全的 Vue 面试题+详解答案

参考地址：https://juejin.cn/post/6961222829979697165#heading-2

## 一、MVC 和 MVVM 区别

### （一）MVC

MVC 全名是 Model View Controller，是模型(model)－视图(view)－控制器(controller)的缩写，一种软件设计典范。

- Model（模型）：是应用程序中用于处理应用程序数据逻辑的部分。通常模型对象负责在数据库中存取数据
- View（视图）：是应用程序中处理数据显示的部分。通常视图是依据模型数据创建的
- Controller（控制器）：是应用程序中处理用户交互的部分。通常控制器负责从视图读取数据，控制用户输入，并向模型发送数据

![](../images/最全的Vue面试题1-1.awebp)

MVC 的思想：一句话描述就是 Controller 负责将 Model 的数据用 View 显示出来，换句话说就是在 Controller 里面把 Model 的数据赋值给 View。

### （二）MVVM

MVVM 新增了 VM 类

- ViewModel 层：做了两件事达到了数据的双向绑定 一是将【模型】转化成【视图】，即将后端传递的数据转化成所看到的页面。实现的方式是：数据绑定。二是将【视图】转化成【模型】，即将所看到的页面转化成后端的数据。实现的方式是：DOM 事件监听。

![](../images/最全的Vue面试题1-2.awebp)

MVVM 与 MVC 最大的区别就是：它实现了 View 和 Model 的自动同步，也就是当 Model 的属性改变时，我们不用再自己手动操作 Dom 元素，来改变 View 的显示，而是改变属性后该属性对应 View 层显示会自动改变（对应 Vue 数据驱动的思想）

整体看来，MVVM 比 MVC 精简很多，不仅简化了业务与界面的依赖，还解决了数据频繁更新的问题，不用再用选择器操作 DOM 元素。因为在 MVVM 中，View 不知道 Model 的存在，Model 和 ViewModel 也观察不到 View，这种低耦合模式提高代码的可重用性

### （三）注意：Vue 并没有完全遵循 MVVM 的思想 这一点官网自己也有说明

![](../images/最全的Vue面试题1-3.awebp)

那么问题来了 为什么官方要说 Vue 没有完全遵循 MVVM 思想呢？

严格的 MVVM 要求 View 不能和 Model 直接通信，而 Vue 提供了$refs 这个属性，让 Model 可以直接操作 View，违反了这一规定，所以说 Vue 没有完全遵循 MVVM。

## 二、为什么 data 是一个函数

组件中的 data 写成一个函数，数据以函数返回值形式定义，这样每复用一次组件，就会返回一份新的 data，类似于给每个组件实例创建一个私有的数据空间，让各个组件实例维护各自的数据。而单纯的写成对象形式，就使得所有组件实例共用了一份 data 对象，就会造成一个变了全都会变的结果。改变 data 数据就会改变所有的 data。

## 三、Vue 组件通讯有哪几种方式

1. props 和$emit 父组件向子组件传递数据是通过 prop 传递的，子组件传递数据给父组件是通过$emit 触发事件来做到的

2. $parent,$children 获取当前组件的父组件和当前组件的子组件
3. $attrs 和 $listeners A->B->C。Vue 2.4 开始提供了$attrs 和$listeners 来解决这个问题
4. 父组件中通过 provide 来提供变量，然后在子组件中通过 inject 来注入变量。(官方不推荐在实际业务中使用，但是写组件库时很常用)
5. $refs 获取组件实例
6. eventBus 兄弟组件数据传递 这种情况下可以使用事件总线的方式
7. vuex 状态管理

## 四、Vue 的生命周期方法有哪些？一般在哪一步发请求

1. **beforeCreate** 在实例初始化之后，数据观测(data observer) 和 event/watcher 事件配置之前被调用。在当前阶段 data、methods、computed 以及 watch 上的数据和方法都不能被访问
2. **created** 实例已经创建完成之后被调用。在这一步，实例已完成以下的配置：数据观测(data observer)，属性和方法的运算， watch/event 事件回调。这里没有$el,如果非要想与 Dom 进行交互，可以通过 vm.$nextTick 来访问 Dom
3. **beforeMount** 在挂载开始之前被调用：相关的 render 函数首次被调用。
4. **mounted** 在挂载完成后发生，在当前阶段，真实的 Dom 挂载完毕，数据完成双向绑定，可以访问到 Dom 节点
5. **beforeUpdate** 数据更新时调用，发生在虚拟 DOM 重新渲染和打补丁（patch）之前。可以在这个钩子中进一步地更改状态，这不会触发附加的重渲染过程
6. **updated** 发生在更新完成之后，当前阶段组件 Dom 已完成更新。要注意的是避免在此期间更改数据，因为这可能会导致无限循环的更新，该钩子在服务器端渲染期间不被调用。
7. **beforeDestroy** 实例销毁之前调用。在这一步，实例仍然完全可用。我们可以在这时进行善后收尾工作，比如清除计时器。
8. **destroyed** Vue 实例销毁后调用。调用后，Vue 实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁。 该钩子在服务器端渲染期间不被调用。
9. **activated** keep-alive 专属，组件被激活时调用。
10. **deactivated** keep-alive 专属，组件被销毁时调用。

### 异步请求在哪一步发起？

可以在钩子函数 created、beforeMount、mounted 中进行异步请求，因为在这三个钩子函数中，data 已经创建，可以将服务端端返回的数据进行赋值。

如果异步请求不需要依赖 Dom 推荐在 created 钩子函数中调用异步请求，因为在 created 钩子函数中调用异步请求有以下优点：

1. 能更快获取到服务端数据，减少页面 loading 时间；
2. ssr 不支持 beforeMount 、mounted 钩子函数，所以放在 created 中有助于一致性。

## 五、v-if 和 v-show 的区别

- v-if 在编译过程中会被转化成三元表达式,条件不满足时不渲染此节点。
- v-show 会被编译成指令，条件不满足时控制样式将对应节点隐藏 （display:none）

### 使用场景

- v-if 适用于在运行时很少改变条件，不需要频繁切换条件的场景
- v-show 适用于需要非常频繁切换条件的场景

### 扩展补充：display:none、visibility:hidden 和 opacity:0 之间的区别？

- （一）共同点：三者都是隐藏

- （二）不同点：

1. 是否占据空间

   - display：none —— 隐藏后不占位置
   - visibility: hidden —— 隐藏后仍占位置
   - opacity: 0 —— 隐藏后仍占位置

2. 子元素是否继承

   - display：none —— 不会被子元素继承，父元素都不存在了，子元素也不会显示
   - visibility：hidden —— 会被子元素继承，可以通过设置子元素 visibility：visible 来显示子元素
   - opacity: 0 —— 会被子元素继承，但不能通过设置子元素 opacity: 1 来重新显示

3. 事件绑定

   - display：none —— 元素不在页面存在了，因此无法获取节点触发它绑定的事件
   - visibility：hidden —— 不会触发它上面绑定的事件
   - opacity: 0 —— 元素上面绑定的事件可以触发

4. 过渡动画
   - display：none —— transition 对于 display 是无效的
   - visibility：hidden —— transition 对于 visibility 是无效的
   - opacity: 0 —— transition 对于 opacity 是有效的

## 六、说说 vue 内置指令

1. v-bind：绑定属性，动态更新 HTML 元素上的属性，例如 v-bind:class
2. v-on：用于监听 DOM 事件以及自定义事件，例如 v-on：click、v-on:keyup
3. v-model：
   - 在普通标签上：变成 value 和 input 的语法糖并且会处理拼音输入法的问题
   - 在组件上：处理 model 中 value 和 event 设置的属性，也是 value 和 input 的语法糖
4. v-if/v-else/v-else-if：
   - 可以配合 template 使用
   - 在 render 函数里就算三元表达式
5. v-show：使用指令来实现，最终会通过 display 来进行显隐
6. v-for：
   - 循环指令：编译出来的结果是\_l 代表渲染列表
   - 优先级比 v-if 高，最好不要一起使用，尽量使用计算属性去解决
   - 注意增加唯一 key 值，不要使用 index 作为 key
7. v-html：赋值就是变量 innerHTML，注意防止 xss 攻击
8. v-text：更新元素的 textContent
9. v-once：定义它的元素或组件只渲染一次，包括元素或组件的素有子节点，首先渲染后不再随数据的变化重新渲染，将被是为静态内容
10. v-cloak：这个指令保持在元素上直到关联实例结束编译，解决初始化慢导致页面闪动的最佳实践
11. v-pre：跳过这个元素以及子元素的编译过程，以此来加快整个项目的编译速度

## 七、怎样理解 Vue 的单向数据流

数据总是从父组件传到子组件，子组件没有权利修改父组件传过来的数据，只能请求父组件对原始数据进行修改。这样会防止从子组件意外改变父级组件的状态，从而导致你的应用的数据流向难以理解。

注意：在子组件直接用 v-model 绑定父组件传过来的 prop 这样是不规范的写法 开发环境会报警告。

如果实在要改变父组件的 prop 值 可以在 data 里面定义一个变量 并用 prop 的值初始化它 之后用$emit 通知父组件去修改。

## 八、computed 和 watch 的区别和运用的场景

computed 是计算属性，依赖其他属性计算值，并且 computed 的值有缓存，只有当计算值变化才会返回内容，它可以设置 getter 和 setter。

watch 监听到值的变化就会执行回调，在回调中可以进行一些逻辑操作。

计算属性一般用在模板渲染中，某个值是依赖了其它的响应式对象甚至是计算属性计算而来；而侦听属性适用于观测某个值的变化去完成一段复杂的业务逻辑。

## 九、v-if 与 v-for 为什么不建议一起使用

v-for 和 v-if 不要在同一个标签中使用,因为解析时先解析 v-for 再解析 v-if。如果遇到需要同时使用时可以考虑写成计算属性的方式。

## 十、Vue2.0 响应式数据的原理

整体思路是数据劫持+观察者模式

对象内部通过 defineReactive 方法，使用 Object.defineProperty 将属性进行劫持（只会劫持已经存在的属性），数组则是通过重写数组方法来实现。当页面使用对应属性时，每个属性都拥有自己的 dep 属性，存放他所依赖的 watcher（依赖收集），当属性变化后会通知自己对应的 watcher 去更新(派发更新)。

## 十一、Vue 如何检测数组变化

## 十二、vue3.0 用过吗？

## 十三、Vue3.0 和 2.0 的响应式原理区别

## 十四、Vue 的父子组件生命周期钩子函数执行顺序

## 十五、虚拟 DOM 是什么？有什么优缺点？

## 十六、v-model 原理

## 十七、v-for 为什么要加 key

## 十八、Vue 事件绑定原理

## 十九、vue-router 路由钩子函数是什么 执行顺序是什么

## 二十、vue-router 动态路由是什么 有什么问题

## 二十一、谈一下对 vuex 的个人理解

## 二十二、Vuex 页面刷新数据丢失怎么解决

## 二十三、Vuex 为什么要分模块并且加命名空间

## 二十四、使用过 Vue SSR 吗？说说 SSR

## 二十五、vue 中使用了哪些设计模式

## 二十六、你都做过哪些 Vue 的性能优化

## 二十七、Vue.mixin 的使用场景和原理

## 二十八、nextTick 使用场景和原理

## 二十九、keep-alive 使用场景和原理

## 三十、Vue.set 方法原理

## 三十一、Vue.extend 作用和原理

## 三十二、写过自定义指令吗 原理是什么

## 三十三、Vue 修饰符有哪些

## 三十四、Vue 模板编译原理

## 三十五、生命周期钩子是如何实现的

## 三十六、函数式组件使用场景和原理

## 三十七、能说下 vue-router 中常用的路由模式实现原理吗

## 三十八、diff 算法了解吗
