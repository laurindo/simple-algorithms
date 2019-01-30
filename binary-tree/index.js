class BinaryTree {
    static solution01() {
        const tree = {};
        return {
            tree,
            add: (v) => {
                const insert = (tree, value) => {
                    if (tree.value) {
                        if (value > tree.value) {
                            return insert(tree.right, value);
                        } else {
                            return insert(tree.left, value);
                        }
                    } else {
                        tree.value = v;
                        tree.left = {};
                        tree.right = {};
                        return tree;
                    }
                };
                
                return insert(tree, v);
            }
        };
    }
}

module.exports = BinaryTree;