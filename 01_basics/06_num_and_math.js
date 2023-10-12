const score = 500
// console.log(score);

const balance = new Number(200)
// console.log(balance);                   // new keyword creates object

// console.log(balance.toString());           // convert the number => string
// console.log(balance.toString().length);     // gives length of the string

// console.log(balance.toFixed(2));        // fixed the number upto given decimals

// const otherNumber = 123.583

// console.log(otherNumber.toPrecision(3));    // toPrecision() returns digits(as per parameter) 
                                            // before the decimal and after the decimal point
                                            
const hundreds = 1000000

// console.log(hundreds.toLocaleString('en-IN'));

// ************* Math *************

// console.log(Math);

// console.log(Math.abs(-5));
// console.log(Math.abs(6));

// console.log(Math.round(4.562));
// console.log(Math.round(4.462));

// console.log(Math.floor(4.562));
// console.log(Math.floor(4.462));

// console.log(Math.ceil(4.562));
// console.log(Math.ceil(4.462));

// console.log(Math.min(4, 5, 45, 1));
// console.log(Math.max(4, 5, 45, 1));

// console.log(Math.random());           // gives number b/w (0 - 10)

// console.log(Math.random() * 10);     // by Multiplying by 10 it gives number from (0 to 10)

// console.log(Math.floor(Math.random() * 10) + 1);

const min = 10
const max = 20

// console.log(Math.random() * (max - min + 1) + min);

console.log(Math.floor(Math.random() * (max - min + 1) + min));