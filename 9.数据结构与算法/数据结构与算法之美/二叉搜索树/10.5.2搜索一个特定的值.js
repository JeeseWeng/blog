function search(key) {
    return this.searchNode(this.root, key)
}

function searchNode(node, key) {
    if (node == null) {
        return false
    }
    if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
        return this.searchNode(node.left, key);
    } else if (this.compareFn(key, node.key) === Compare.BIGGER_THAN) {
        return this.searchNode(node.right, key);
    } else {
        return true
    }
}