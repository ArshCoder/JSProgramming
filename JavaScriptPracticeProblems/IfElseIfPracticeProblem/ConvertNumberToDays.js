//Read a Number and Display the week day(Sunday,Monday,..)

{
    let Number = Math.floor(((Math.random() * 10) % 7) + 1);

    if (Number == 1) {
        console.log("Sunday");
    } else if (Number == 2) {
        console.log("Monday");
    } else if (Number == 3) {
        console.log("Tuesday");
    } else if (Number == 4) {
        console.log("Wednesday");
    } else if (Number == 5) {
        console.log("Thursday");
    } else if (Number == 6) {
        console.log("Friday");
    } else if (Number == 7) {
        console.log("Saturday");
    }
    else {
        console.log("Invalid Number");
    }
}