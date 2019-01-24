class Prime {
    static isPrime(value) {
        for (var x = 2; x < value; x++) {
            if (value % x === 0) {
                return false;
            }
        }
        return value > 1;
    }

    static printNumbersPrime(list) {
        let listValues = [];
        for (var x = 0; x < list.length; x++) {
            let isPrime = this.isPrime(list[x]);
            listValues.push(isPrime);
            if (isPrime) {
                console.log(`${list[x]} is prime`);
            } else {
                console.log(`${list[x]} is not prime`);
            }
        }
        return listValues;
    }
}

module.exports = Prime;