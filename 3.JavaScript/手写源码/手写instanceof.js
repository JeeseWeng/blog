// 手写Promise
// instance的原理就是通过在原型链上（proto）能找到就是true，找不到就是false
function myInstanceof1(left, right) {
    console.log(left)
    var proto = left.__proto__;
    var prototype = right.prototype;
    if (proto === null) {
        return false
    } else if (proto === prototype) {
        return true
    } else {
        return myInstanceof(proto, right)
    }
}

var a = {}
console.log(myInstanceof1(a, Array))
console.log(myInstanceof1(a, Object))

function myInstanceof2(left, right) {
    // 获得类型的原型
    let prototype = right.prototype
    // 获得对象的原型
    left = left.__proto__
    // 判断对象的类型是否等于类型的原型
    while (true) {
        console.log(left)
        if (left === null)
            return false
        if (prototype === left)
            return true
        left = left.__proto__
    }
}
console.log(myInstanceof2(a, Array))
console.log(myInstanceof2(a, Object))

// 补充知识点
// 1、 while会在函数拿到对应值后停止循环
// 2、return 必须在函数内
(function () {
    let i = 0;
    while (true) {
        console.log(++i)
        if (i >= 10) return true
    }
})()