// Converting inches into feet
let c = 20;
let a = 35; 
let b = a / c ;
console.log(a + " in = " + b + " ft");

//Rectangular Plot of 60 feet x 40 feet in meters
let d = 50;
let e = 30;
let f = 0.305;
let area = (d * f) * (e * f);
console.log("Area is : " + area + "sqm");

//Calculate area of 25 such plots in acres
let n = 50;
let total = n * area;
let g = 4047;
console.log("Area of " + n + " plots is " + (total / g) + " acres ");