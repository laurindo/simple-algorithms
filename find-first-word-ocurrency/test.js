const FindFirstWordOcurrency = require('./index');

test('Find First Word Ocurrency - Solution 01', () => {
    const result = FindFirstWordOcurrency.solution01('RBCDBA');
    expect(result).toBe('B');
});