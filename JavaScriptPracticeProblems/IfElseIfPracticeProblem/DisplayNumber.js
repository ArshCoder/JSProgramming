//Read a number 1,10,100,1000 and display unit ten,hundread, etc;
{
    const readline = require("readline");
        const read = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        read.question("Enter The Number 1,10,100,1000 ", function(Number) {
            if(`${Number}` == 1) {
            console.log("One");
            }else if(`${Number}` == 10) {
                console.log("Ten");
            }else if(`${Number}` == 100) {
                console.log("Hundred");
            }else if(`${Number}` == 1000) {
                console.log("Thousand");
            }
            else {
                console.log("Invalid Number");
            }

            console.log(`The Unit Is " ${Number}`)
                read.close();
        });

    }