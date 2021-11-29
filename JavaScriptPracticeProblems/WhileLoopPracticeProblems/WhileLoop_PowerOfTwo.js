//Write a program that takes a command-line argument n and prints a table of 
//the powers of 2 that are less than or equal to 2^n till 256 is reached..

{
    const readline = require("readline");
    const read = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    read.question("Enter the  Number ", function (number) {
        let limit = 0;
        let powerOf = 1;
        while (limit <= number) {
            limit = Math.pow(2, powerOf)
            powerOf++;
            console.log(limit);
        }
        read.close();
    });
}