const Factorial = require('./index');

test('Factorial Solution 01', () => {
    const result = Factorial.solution1(5);
    expect(result).toBe(120);
});