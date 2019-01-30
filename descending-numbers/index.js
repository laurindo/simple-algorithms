class DescendingNumbers {
    static solution01(number) {
        let arr = number.toString().split('');
        let sorted = arr.sort((a, b) => b - a);
        return parseInt(sorted.join(''), 10);
    }
}

module.exports = DescendingNumbers;