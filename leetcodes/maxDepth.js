var maxDepth = function(root) {
    let current = this.root;
    while(current.right !== null){
        current = current.right
    }
    return current.data

};