//Read a single digit number and write the number in word.
{
    let numner = Math.floor( (Math.random() * 10 ) % 10 );

    if(numner == 0){
        console.log("Zero");
    }else if(numner == 1){
        console.log("One");
    }else if(numner == 2){
        console.log("Two");
    }else if(numner == 3){
        console.log("Three");
    }else if(numner == 4){
        console.log("Four");
    }else if(numner == 5){
        console.log("Five");
    }else if(numner == 6){
        console.log("Six");
    }else if(numner == 7){
        console.log("Seven");
    }else if(numner == 8){
        console.log("Eight");
    }else if(numner == 9){
        console.log("Nine");
    }
    else{
        console.log("Invalid Number");
    }
}