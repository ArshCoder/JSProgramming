const { constants } = require("crypto");
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("enter the number to print factorial ", function(factorialOfNumber){
    console.log("the number");
    let factorialIS= 1;
    for(let number = 1; number <= factorialOfNumber; number++ ){
        factorialIS = factorialIS*number;
    }
    console.log("the factorial is "+factorialIS);
    rl.close();  
});