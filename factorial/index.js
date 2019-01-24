class Factorial {
    static solution1(n) {
        if (n === 0) {
            return 1;
        }
        return n * this.solution1(n-1);
    }
}

module.exports = Factorial;
