# 扁平数据结构转 Tree -- 动态规划算法技巧

## 参考文章：[面试了十几个高级前端，竟然连（扁平数据结构转 Tree）都写不出来](https://juejin.cn/post/6983904373508145189)

## 算法基础知识

## 题目

一维数组数据结构内容如下：

```
let arr = [
    {id: 1, name: '部门1', pid: 0},
    {id: 2, name: '部门2', pid: 1},
    {id: 3, name: '部门3', pid: 1},
    {id: 4, name: '部门4', pid: 3},
    {id: 5, name: '部门5', pid: 4},
]
```

输出树状数据结构

```
[
    {
        "id": 1,
        "name": "部门1",
        "pid": 0,
        "children": [
            {
                "id": 2,
                "name": "部门2",
                "pid": 1,
                "children": []
            },
            {
                "id": 3,
                "name": "部门3",
                "pid": 1,
                "children": [
                    // 结果 ,,,
                ]
            }
        ]
    }
]
```
## 先不用考虑性能问题。实现功能的方法

主要思路是提供一个递getChildren的方法，该方法递归去查找子集。 就这样，不用考虑性能，无脑去查
```
/**
 * 递归查找，获取children
 */
const getChildren = (data, result, pid) => {
  for (const item of data) {
    if (item.pid === pid) {
      const newItem = {...item, children: []};
      result.push(newItem);
      getChildren(data, newItem.children, item.id);
    }
  }
}

/**
* 转换方法
*/
const arrayToTree = (data, pid) => {
  const result = [];
  getChildren(data, result, pid)
  return result;
}
```
booking实现方式
```
```
从上面的代码我们分析，该实现的时间复杂度为O(2^n)。