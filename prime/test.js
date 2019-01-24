const Prime = require('./index');

test('Prime - Solution 01', () => {
    const result = Prime.isPrime(5);
    expect(result).toBe(true);
});

test('Prime - Solution 02', () => {
    const result = Prime.printNumbersPrime([1,2,3,4,5]);
    expect(result[0]).toBe(false);
    expect(result[1]).toBe(true);
    expect(result[2]).toBe(true);
});