//Leap Year or not a Leap Year. A Leap Year checks for 4 Digit Number, Divisible by 4 and not 100 unless divisible by 400.
{
    const readline = require("readline");
    const read = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    read.question("Enter The year ", function(day) {
        if(`${day}` > 999)
            if(`${day}` % 4 == 0 ) {
                console.log("it is leap year");
            }
            else{
                console.log("it is not a leap year");
            }
        else{
            console.log("Number Is Less Than 4 digit")
        }
            
            console.log(`The Year Is " ${day}`)
            read.close();
    });
}