class ReverseString {
    static solution1(str) {
        return str.split('').reverse().join('');
    }

    // AVOID this solution because you can make some mistakes trying use the normal "loop for"
    static solution2(str) {
        let reversed = [];
        for (let i = str.length; i >= 0; i--) {
            reversed.push(str[i]);
        }
        return reversed.join('');
    }

    static solution3(str) {
        let reversed = '';
        for(let character of str) {
            reversed = character + reversed;   
        }
        return reversed;
    }
}

module.exports = ReverseString;