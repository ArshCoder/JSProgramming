//Write a program that takes a input and determines if the number is a prime.
{
    const readline = require("readline");
    const read = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    read.question("Enter The Number: ", function (limitOfPrimeNumber) {
        console.log("The Prime Numbers are");

        let count = 0;
        for (let perimeOrNot = 2; perimeOrNot <= limitOfPrimeNumber; perimeOrNot++) {
            for (let checkPrime = 1; checkPrime <= perimeOrNot; checkPrime++) {
                if (perimeOrNot % checkPrime == 0) {
                    count++
                }
            }
            if (count == 2) {
                console.log(perimeOrNot);
            }
            count = 0;
        }
        read.close();
    });
}