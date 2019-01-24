class Palindrome {
    static solution01(str) {
        let reversed = '';
        for (let character of str) {
            reversed = character + reversed;
        }
        return reversed;
    }

    static solution02(str) {
        return str.split('').every((char, index) => {
            return char === str[str.length - index - 1];
        });
    }
}

module.exports = Palindrome;