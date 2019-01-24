class Fibonacci {
    // 0 1 1 2 3 5 8 ...
    static solution1(n) {
        let temp = null;
        let prev = 0;
        let next = 1;
        let str = '';
        while (n >= 1) {
            temp = next;
            next = next + prev;
            prev = temp;
            str += `${prev} `;
            n--;
        }
        return prev;
    }

    static solution2(n) {
        if (n < 2) {
            return n;
        }
        return this.solution2(n-1) + this.solution2(n-2);
    }
}

module.exports = Fibonacci;