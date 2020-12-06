function isPrime(integer) {
    for (i = 2; i < integer; i++) {
        if (integer % i === 0) {
            console.log(integer + " is devisible by " + i);
            return false;
        }
        }
    if (integer <= 1) {
        return false;
    }
    return true;
}


