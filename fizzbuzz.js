/*  Fizz Buzz: 
    1) Print numbers 1-100
    2) For numbers multiple of 3, print "fizz"
    3) For numbers multiple of 5, print "buzz"
    4) For numbers multiple of 3 and 5, print "fizzbuzz"
*/

for(let i = 1; i < 101; i++) {
    
    if(i % 3 === 0 && i % 5 === 0) {
        console.log(`${i} - fizzbuzz`);
    }

    else if(i % 3 === 0) {
        console.log(`${i} - fizz`);
    }

    else if (i % 5 === 0) {
        console.log(`${i} - buzz`);
    }

    else {
        console.log(i);
    }
}