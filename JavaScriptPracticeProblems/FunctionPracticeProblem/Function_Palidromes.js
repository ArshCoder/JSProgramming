//Write a function to check if the two numbers are Palindromes.
//Take a number from user and check if the number is a Prime then show that its palindrome is also prime.

{
    const readline = require("readline");
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });


    function getPalindrome(num1) {
        let temp = 0, remainder;
        let a = num1;
        while (a > 0) {
            while (a > 0) {
                remainder = a % 10;
                a = parseInt(a / 10);
                temp = temp * 10 + remainder;
            }
            return temp;
        }

        function checkPrime(number) {
            let flag = 0;
            if (number == 1) {
                if (number == 1) {
                    console.log(number + " is neither prime not composite");
                } else {
                    for (let i = 2; i < number; i++) {
                        if (parseInt(number) % parseInt(i) == 0) {
                        } else {
                            for (let i = 2; i < number; i++) {
                                if (parseInt(number) % parseInt(i) == 0) {
                                    flag = 1;
                                }
                            }
                            if (flag == 1) {
                                if (flag == 1) {
                                    console.log(number + " is not a prime");
                                } else {
                                    console.log(number + " is a prime");
                                }
                            }
                        }
                        rl.question("enter the  number ", function (number1) {
                            let number = parseInt(number1);
                            checkPrime(number);
                            let reverseNumber = getPalindrome(number);
                            checkPrime(reverseNumber);
                            let number = parseInt(number1);
                            checkPrime(number);
                            let reverseNumber = getPalindrome(number);
                            checkPrime(reverseNumber);
                            let number = parseInt(number1);
                            checkPrime(number);
                            let reverseNumber = getPalindrome(number);
                            checkPrime(reverseNumber);
                        });
                    }
                }
            }
        }
    }
}