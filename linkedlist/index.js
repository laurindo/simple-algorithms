class Linkedlist {
    constructor(value) {
        this.head = null;
        this.length = 0;
        this.addToHead(value);
    }

    addToHead(value) {
        const newNode = { value };
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }

    removeFromHead() {
        if (this.length === 0) {
            return undefined;
        }
        const value = this.head.value;
        this.head = this.head.next;
        this.length--;
        return value;
    }
}

module.exports = Linkedlist;