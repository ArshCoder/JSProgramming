//Program to simulate a coin flip and print out "Heads" or "Tails" accordingly.
{
    let coinValue = Math.floor( (Math.random() * 10 ) % 2 );
    if(coinValue == 0){
            console.log("Tail");
    }else{
        console.log("Head");
    }
}