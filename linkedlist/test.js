const LinkedList = require('./index');
const linkedList = new LinkedList(1).addToHead(2).addToHead(3);
console.log("LINKED LIST :" + JSON.stringify(linkedList));

test('Linked List - Solution 01', () => {
    expect(linkedList.head.value).toBe(3);
    expect(linkedList.head.next.value).toBe(2);
});