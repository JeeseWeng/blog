// 搜索最小值
function min() {
    return this.minNode(this.root);
}

function minNode(node) {
    let current = node;
    while (current != null && current.left != null) {
        current = current.left;
    }
    return current;
}

// 搜索最大值
function max() {
    return this.maxNode(this.root)
}

function maxNode(node) {
    let current = node;
    while (current != null && current.right != null) {
        current = current.right;
    }
    return current;
}

