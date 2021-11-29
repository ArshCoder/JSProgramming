{
    const readline = require("readline");
    const read = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    read.question(("Enter The lower Number: "), function (lowerNumber) {
        read.question("Enter The upper Number: ", function (upperNumber) {

            console.log(`The prime numbers between ${lowerNumber} and ${upperNumber} are:`);

            // looping from() lowerNumber to upperNumber.
            for (let i = lowerNumber; i <= upperNumber; i++) {
                let flag = 0;

                // looping through 2 to user input number.
                for (let j = 2; j < i; j++) {
                    if (i % j == 0) {
                        flag = 1;
                        break;
                    }
                }

                // if number greater than 1 and not divisible by other numbers then us if condition.
                if (i > 1 && flag == 0) {
                    console.log(i);
                }
            }
            read.close();
        });
    });
}