//Write a program that takes User Inputs and does Unit Conversion of different Length units use Case;
{
    const readline = require("readline");
    const Read = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    function calculateUnit(userInput) {

        //feet value
        let feet = 35;
        let Feet_To_Inch = 1;
        let Feet_To_Meter = 2;
        let Inch_To_Feet = 3;
        let Meter_To_Feet = 4;

        //inches values
        let inch = 12;
        switch (parseInt(userInput)) {
            case Feet_To_Inch:
                convertedValue = feet * 12;
                console.log(convertedValue + "Inch");
                break;
            case Feet_To_Meter:
                convertedValue = feet * 0.3048;
                console.log(convertedValue + "Meter");
                break;
            case Inch_To_Feet:
                convertedValue = inch / 12;
                console.log(convertedValue + "Feet");
                break;
            case Meter_To_Feet:
                convertedValue = inch / .03048;
                console.log(convertedValue + "Feet");
                break;
            default:
                console.log("Invalid Input");
        }
    }

    Read.question("Enter The 1. feet to Inch 2. feet to Meter 3. Inch to feet 4. Meter to feet: ", function (userInput) {
        calculateUnit(userInput);
        Read.close();
    });
}