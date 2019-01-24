function findPrimeFactors (num) {

    var primeFactors = [];
    while (num % 2 === 0) {
        primeFactors.push(2);
        num = num / 2;
    }
    
    var sqrtNum = Math.sqrt(num);
    for (var i = 3; i <= sqrtNum; i++) {
        while (num % i === 0) {
            primeFactors.push(i);
            num = num / i;
        }
    }

    if (num > 2) {
        primeFactors.push(num);
    }
    return primeFactors;
}

console.log(findPrimeFactors(20)); // [2, 2, 5]
console.log(findPrimeFactors(11)); // [11]