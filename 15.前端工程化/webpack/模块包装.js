(function (modules) {
    // 模拟 require 函数，从内存中加载模块；
    function __webpack_require__(moduleId) {
        // 缓存模块
        if (installedModules[moduleId]) {
            return installedModules[moduleId].exports;
        }

        var module = installedModules[moduleId] = {
            i: moduleId,
            l: false,
            exports: {}
        };

        // 执行代码；
        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

        // Flag: 标记是否加载完成；
        module.l = true;

        return module.exports;
    }

    // ...

    // 开始执行加载入口文件；
    return __webpack_require__(__webpack_require__.s = "./src/index.js");
})({
    "./src/index.js": function (module, __webpack_exports__, __webpack_require__) {
        // 使用 eval 执行编译后的代码；
        // 继续递归引用模块内部依赖；
        // 实际情况并不是使用模板字符串，这里是为了代码的可读性；
        eval(`
			__webpack_require__.r(__webpack_exports__);
			//
			var _test__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("test", ./src/test.js");
		`);
    },
    "./src/test.js": function (module, __webpack_exports__, __webpack_require__) {
        // ...
    },
})
