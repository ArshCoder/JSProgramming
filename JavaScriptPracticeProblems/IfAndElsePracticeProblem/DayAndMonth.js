//day and month from the command line and prints true if day of month is between March 20 and June 20, false otherwise.
{
    let month = 4;
    let day = 18;

    if ( month >= 7 || month <= 2 ){
        console.log("False")
    }
    else{
        if(month == 3 && day > 20){
            console.log("False")
        }
        else if(month == 6 && day > 20){
            console.log("False");
        }
        else{
            console.log("True");
        }
    }
}
