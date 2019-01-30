const FizzBuzz = require('./index');

test('FizzBuzz - Solution 01', () => {
    let result = null;
    
    result = FizzBuzz.solution01(2);
    expect(result).toBe("fizzbuzz12");

    result = FizzBuzz.solution01(4);
    expect(result).toBe("fizzbuzz12fizz4");

    result = FizzBuzz.solution01(5);
    expect(result).toBe("fizzbuzz12fizz4buzz");
});