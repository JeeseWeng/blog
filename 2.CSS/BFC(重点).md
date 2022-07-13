# BFC：块格式化上下文（重点）

## 一、规范解释：
块格式化上下文（Block Formatting Context，BFC）是Web页面的可视化CSS渲染的一部分，是布局过程中生成块级盒子的区域，也是浮动元素与其他元素的交互限定区域。
## 二、通俗理解：
BFC 是一个独立的布局环境,可以理解为一个容器,在这个容器中按照一定规则进行物品摆放,并且不会影响其它环境中的物品

## 三、BFC是一个css渲染特殊的一部分，需要一定的条件才能触发
1. 根元素或其它包含它的元素
2. 浮动元素（元素的float不是none）
3. 绝对定位元素 (元素具有 position 为 absolute 或 fixed)
4. 内联块 (元素具有 display: inline-block)
5. 表格单元格 (元素具有 display: table-cell，HTML表格单元格默认属性)
6. 表格标题 (元素具有 display: table-caption, HTML表格标题默认属性)
7. 具有overflow 且值不是 visible 的块元素

## 四、BFC可以解决的问题
1. 垂直外边距重叠问题
2. 去除浮动
3. 自适用两列布局

## 五、具体实现