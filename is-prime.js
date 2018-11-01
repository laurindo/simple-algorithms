function isPrime(num) {
    if (num < 2) return false;
    for (var x = 2; x < num; x++) {
      if (num % x === 0) {
        return false;
      }
    }
    return true;
  }
  
  var number = 6;
  console.log(`${number} é numero primo? ${isPrime(number)}`);