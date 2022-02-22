# <center>React</center>

## 一、官网文档使用

### （一）React

### （二）React-dom

### （三）React-router

### （三）Redux

### （四）Redux-saga

### （五）dva

### （六）ant-design

### （七）Typescript

## 二、原理解析

## 三、使用建议

### 方案一

React 全家桶。

- 首先 React 框架基础，直接根据官方文档学习最新的版本。
- 然后 React router，也就是路由，学习最新的 v4 版本。
- 当你需要进行数据管理时，就可以学习 redux 或者 mobx，不过大多数公司都是使用 redux。
- 当你需要进行复杂的异步操作或者进行异步 action 时，就需要用到 rxjs 配合 redux-observable 或者 redux-saga。
- 当然，你还需要掌握一套 UI 组件库的用法。推荐蚂蚁金服的 ant design。

### 方案二

react+react-dom+react-router+axios+redux1.

1. 框架既定 react 搭建项目可以使用官方的 creat-react-app 脚手架，一键搭建项目(集成了 react+react-dom+react-router) 或者是 dva(antd 官网有集成了 antd 的 dva 项目哦)
2. react-router（路由管理）版本比较多，可以使用最新的 v4+;
3. axios/genrater（前后台交互）这类主要都是 http 请求，简单用用就可以啦；
4. redux/mobx（状态管理）状态管理，可以做任何你想的到的东西哦；
5. antd/React-Desktop/Material-UI 想要 快速开发项目请选择一款你喜欢的 UI 框架。

## 四、资料
