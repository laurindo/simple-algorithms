const word = 'aabbccdd';
const a = word.split('').filter((value, index) => {
    const c = word.charAt(index);
    return word.indexOf(c) === index && word.indexOf(c, index + 1) === -1;
});
console.log(a);