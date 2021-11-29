// Write argument n and prints the nth harmonic number. Harmonic Number is of the form
{
    const readline = require("readline");
    const read = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    read.question("Enter the limit of harmonic: ", function (limitOftable) {
        sumOfHarmonics = 0;
        for (let i = 1; i <= limitOftable; i++) {
            sumOfHarmonics += 1 / i;
        }
        console.log("The sum of Harmonic is " + sumOfHarmonics);
        read.close();
    });
}