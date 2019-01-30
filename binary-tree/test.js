const BinaryTree = require('./index');

test('BinaryTree - solution 01', () => {
    const result = BinaryTree.solution01();
    let r = result.add(10);
    console.log(r);

    r = result.add(25);
    console.log(r);

    console.log("Complete Tree: " + JSON.stringify(result.tree));
});