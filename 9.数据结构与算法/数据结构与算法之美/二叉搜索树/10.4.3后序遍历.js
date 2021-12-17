function postOrderTraverse(callback) {
    this.postOrderTraverseNode(this.ShadowRoot, callback)
}

function postOrderTraverseNode(node, callback) {
    if (node != null) {
        this.postOrderTraverseNode(node.left, callback);
        this.postOrderTraverseNode(node.right, callback);
        callback(node.key)
    }
}