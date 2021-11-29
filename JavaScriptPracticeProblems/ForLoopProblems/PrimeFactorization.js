//Write a program to compute Factors of a number N using prime factorization method.

{
    const readline = require("readline");
    const read = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    
    read.question("enter the  number ", function (number) {
        let Number_For_Prime = parseInt(number);

        let isPrime = true;

        if (Number_For_Prime == 1) {
            console.log("1 is neither prime nor composite number.");
        }
        else if (Number_For_Prime > 1) {

            for (let i = 2; i < Number_For_Prime; i++) {
                if (Number_For_Prime % i == 0) {
                    isPrime = false;
                    break;
                }
            }

            if (isPrime) {
                console.log(`${Number_For_Prime} is a prime number`);
            } else {
                console.log(`${Number_For_Prime} is a not prime number`);
            }
        }

        else {
            console.log("The number is not a prime number.");
        }
        read.close();
    });
}