class FindFirstWordOcurrency {
    static solution01(words) {
        let hashTable = {};
        let foundWord = '';
        for (let i = 0; i < words.length; i++) {
            if (hashTable[words[i]]) {
                foundWord = words[i];
            } else {
                hashTable[words[i]] = 1;
            }
        }
        return foundWord;
    }
}

module.exports = FindFirstWordOcurrency;