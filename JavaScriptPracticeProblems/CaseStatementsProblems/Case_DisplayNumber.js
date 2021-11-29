////Read a number 1,10,100,1000 and display unit ten,hundread, etc Use Case;
const readline = require("readline");
        const read = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        read.question("Enter The Number 1,10,100,1000: ", function(Number) {
            let unit = Number; 
        console.log(Number+" unit "+unit);  
        switch(unit){
            case "1":
                console.log("One");
                break;
            case "10":
                console.log("Ten");
                break;
            case "100":
                console.log("Hundred");
                break;
            case "1000":
                console.log("Thousand");
                break;
            default:
                console.log("Invalid input");
                break;
        }
        read.close();
});