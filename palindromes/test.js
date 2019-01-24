const Palindrome = require('./index');

test('Palindrome - Solution 01 should be a palindrome', () => {
    const result = Palindrome.solution01("abba");
    expect(result).toBe("abba");
});

test('Palindrome - Solution 01 should not be a palindrome', () => {
    const result = Palindrome.solution01("daniel");
    expect(result).not.toBe("daniel");
});

test('Palindrome - Solution 02 should be a palindrome', () => {
    const result = Palindrome.solution02("abba");
    expect(result).toBe(true);
});