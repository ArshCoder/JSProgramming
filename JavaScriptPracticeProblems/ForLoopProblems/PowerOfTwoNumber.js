//Write a program powers of 2 that are less than or equal to 2^n.
{
    const readline = require("readline");
    const read = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    read.question("Enter The limit number to print table: ", function (limitOftable) {

        for (let i = 1; i <= limitOftable; i++) {
            let tableOf = Math.pow(2, i);
            for (let j = 1; j <= 10; j++) {
                console.log(tableOf + " * " + j + " = " + (tableOf * j));
            }
        }
        read.close();
    });
}