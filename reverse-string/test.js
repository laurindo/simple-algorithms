const ReverseString = require('./index');

test('#SOLUTION-01 should return a reverse string', () => {
    const reversedString = ReverseString.solution1('apple');
    expect(reversedString).toBe('elppa');
});

test('#SOLUTION-02 should return a reverse string', () => {
    const reversedString = ReverseString.solution2('apple');
    expect(reversedString).toBe('elppa');
});

test('#SOLUTION-03 should return a reverse string', () => {
    const reversedString = ReverseString.solution3('apple');
    expect(reversedString).toBe('elppa');
});
