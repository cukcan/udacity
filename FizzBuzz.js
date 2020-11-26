var x = 1;
while (x <= 100) {
    if (x % 15 === 0) {
        console.log("FizzBuzz");
    } else if (x % 5 === 0) {
        console.log("Buzz");
    } else if (x % 3 === 0) {
        console.log("Fizz");
    } else {
        console.log(x);
    }
    x++;
}