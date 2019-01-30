/** 
 * Write a program that console logs the numbers from 1 to n.
 * But for multiples of 3 print "fizz" instead of the number and for the multiples of 5 print "buzz".
 * For numbers which are multiples of both 3 and 5 print "fizzbuzz"
 * 
 * Example:
 * 
 * fizzBuzz(5)
 * 
 * fizzbuzz
 * 1
 * 2
 * fizz
 * 4
 * buzz
*/

class FizzBuzz {
    static solution01(n) {
        let str = '';
        for (var x = 0; x <= n; x++) {
            if (x % 3 === 0 && x % 5 === 0) {
                str += "fizzbuzz";
                console.log("fizzbuzz");
            } else if (x % 3 === 0) {
                str += "fizz";
                console.log("fizz");
            } else if (x % 5 === 0) {
                str += "buzz";
                console.log("buzz");
            } else {
                str += x;
                console.log(x);
            }
        }
        return str;
    }
}

module.exports = FizzBuzz;