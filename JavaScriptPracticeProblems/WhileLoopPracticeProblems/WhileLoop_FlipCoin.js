//Extend the Flip Coin problem till either Heads or Tails wins 11 times.

{
    let head = 0
    let tail = 0;
    while (head < 11 && tail < 11) {
        let coinflip = Math.floor((Math.random() * 10) % 2);
        switch (coinflip) {
            case 1:
                head++;
                break;
            case 0:
                tail++;
                break;
            default:
                console.log("The value is invalid");
        }
    }
    if (head == 11) {
        console.log("Head wins");
    } else {
        console.log("Tail wins")
    }
    console.log("The count of head and tail is :-  Head :-" + head + " , Tail :-" + tail);
}