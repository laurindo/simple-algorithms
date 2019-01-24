function factorial(num) {
    if (num === 0) { return 1; }
    console.log(`${num} * `);
    return num * factorial(num -1);
}

console.log(factorial(5));