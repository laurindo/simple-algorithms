const DescendingNumber = require('./index');

test('Descending Number - Solution 01', () => {
    const result = DescendingNumber.solution01(342);
    expect(result).toBe(432);
});