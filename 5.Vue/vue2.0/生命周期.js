// 生命周期函数就是组件在初始化或者数据更新时会触发的钩子函数。
// 在初始化时，会调用以下代码，生命周期就是通过 callHook 调用的
// 使用对象指针的方式传递调用赋值
Vue.prototype._init = function (options) {
    initLifecycle(vm)// 初始化生命周期
    initEvents(vm)// 初始化事件
    initRender(vm)// 初始渲染
    callHook(vm, 'beforeCreate') // 调用beforeCreate生命周期钩子，拿不到 props data
    initInjections(vm)// 初始化注入
    initState(vm) // 初始化状态(包含prop和data)
    initProvide(vm) // 初始化供应者
    callHook(vm, 'created')// 调用 created 函数
}
// 可以发现在以上代码中，beforeCreate 调用的时候，是获取不到 props 或者 data 中的数据的，因为这些数据的初始化都在 initState 中。

export function mountComponent() {
    callHook(vm, 'beforeMount')
    // ...
    if (vm.$vnode == null) {
        vm._isMounted = true
        callHook(vm, 'mounted')
    }
}

// 接下来是数据更新时会调用的钩子函数
function flushSchedulerQueue() {
    // ...
    for (index = 0; index < queue.length; index++) {
        watcher = queue[index]
        if (watcher.before) {
            watcher.before() // 调用 beforeUpdate
        }
        id = watcher.id
        has[id] = null
        watcher.run()
        // in dev build, check and stop circular updates.
        if (process.env.NODE_ENV !== 'production' && has[id] != null) { // ???
            circular[id] = (circular[id] || 0) + 1
            if (circular[id] > MAX_UPDATE_COUNT) {
                warn(
                    'You may have an infinite update loop ' +
                    (watcher.user
                        ? `in watcher with expression "${watcher.expression}"`
                        : `in a component render function.`),
                    watcher.vm
                )
                break
            }
        }
    }
    callUpdatedHooks(updatedQueue)
}
// 一个个更新队列
function callUpdatedHooks(queue) {
    let i = queue.length
    while (i--) {
        const watcher = queue[i]
        const vm = watcher.vm
        if (vm._watcher === watcher && vm._isMounted) {
            callHook(vm, 'updated')
        }
    }
}

// 销毁组件的钩子函数
Vue.prototype.$destroy = function () {
    // ...
    callHook(vm, 'beforeDestroy')
    vm._isBeingDestroyed = true
    // remove self from parent
    const parent = vm.$parent
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
        remove(parent.$children, vm)
    }
    // teardown watchers
    if (vm._watcher) {
        vm._watcher.teardown()
    }
    let i = vm._watchers.length
    while (i--) {
        vm._watchers[i].teardown()
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
        vm._data.__ob__.vmCount--
    }
    // call the last hook...
    vm._isDestroyed = true
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null)
    // fire destroyed hook
    callHook(vm, 'destroyed')
    // turn off all instance listeners.
    vm.$off()
    // remove __vue__ reference
    if (vm.$el) {
        vm.$el.__vue__ = null
    }
    // release circular reference (##6759)
    if (vm.$vnode) {
        vm.$vnode.parent = null
    }
}

// 在执行销毁操作前会调用 beforeDestroy 钩子函数，然后进行一系列的销毁操作，如果有子组件的话，也会递归销毁子组件，所有子组件都销毁完毕后才会执行根组件的 destroyed 钩子函数。
