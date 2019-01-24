const Fibonacci = require('./index');

test('Fibonacci Solution 01', () => {
    const result = Fibonacci.solution1(5);
    expect(result).toBe(5);
});

test('Fibonacci Solution 02', () => {
    const result = Fibonacci.solution2(5);
    expect(result).toBe(5);
});