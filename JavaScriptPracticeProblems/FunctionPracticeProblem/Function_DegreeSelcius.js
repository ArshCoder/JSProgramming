//Help user find degF or degC based on their Conversion Selection. Use
//Case Statement and ensure that the inputs are within the Freezing Point 
 //( 0 °C / 32 °F ) and the Boiling Point of Water ( 100 °C / 212 °F )

 {
    const readline = require("readline");
    const read = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    let degreeToFerinhet = 0;
    let ferinheitToDegree = 0;

    degreeToFerinhet(value); {

        if (value >= 0 && value <= 100) {
            result = (parseFloat(value) * (9 / 5)) + 32;
        } else {
            console.log("Enter value between 0-100");
        }
    }
    ferinheitToDegree(value); {
        if (value >= 32 && value <= 212) {
            result = (parseFloat(value) - 32) * (5 / 9);
        } else {
            console.log("Enter value between 32-212");
        }
    }

    read.question("enter enter 0 to degree to Feinheit 1 to convert F to Degree c and  ", function (number) {
        switch (number) {
            case 0:
                read.question("enter the value for conversion ", function (number) {
                    degreeToFerinhet(number);
                });
            case 1:
                read.question("enter value to conversion ", function (number) {
                    ferinheitToDegree(number)
                });
            default:
                console.log("invalid inpur");
        }
        read.close();
    });
}