//Write a program that computes a factorial of a number taken as input.
{
    const readline = require("readline");
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question("Enter the Number to Print factorial: ", function (factorialOfNumber) {
        let Input = 1;
        for (let number = 1; number <= factorialOfNumber; number++) {
            Input = Input * number;
        }
        console.log("The factorial Number is " + Input);
        rl.close();
    });
}