// const score = 400 // js fetch auto that this is a no 

// const balance = new Number(500) // explicilty add no hi chahye 

// console.log(score); // 400
// console.log(balance); // [Number: 500]
// console.log(typeof balance); // object
// console.log(balance.toString().length); // 3 |  Convert number to string so we can use string properties and methods.
// console.log(balance.toFixed(2)); //500.00

// const otherNo = 23.89
// const otherNo1 = 123.89
// console.log(otherNo.toPrecision(3)); //23.9
// console.log(otherNo1.toPrecision(3)); //124

// const hundreds = 100000000
// console.log(hundreds.toLocaleString()); //100,000,000
// console.log(hundreds.toLocaleString("en-IN")); //10,00,00,000


console.log(Math); // Object [Math] {} || Object that has alots of properties 
console.log(Math.abs(-4)); //4
console.log(Math.round(4.3)); //4
console.log(Math.ceil(4.2)); //5 || Top value 
console.log(Math.floor(4.9)); //4 || Top value 
console.log(Math.min(4, 9, 7, 19)); //4 || Min value 
console.log(Math.max(4, 9, 7, 19)); //10 || Min value 

console.log(Math.random()); //Any random value between 0 - 1 
console.log((Math.random() * 10 )+ 1); //Any random value between 1 - 10 || avoid the 0 case for the value like 0.04 {0.04 * 10 = 0}
console.log(Math.floor(Math.random() * 10 )+ 1); // round off non decimal value 

const min = 10;
const max = 20;

// i want range between the 10 - 20
console.log(Math.floor(Math.random() * (max - min + 1))); // [0 - 10] || we want min 10 so add that 
console.log(Math.floor(Math.random() * (max - min + 1)) + min); // [10 - 20] || min 10 to chahye hi chhaye 






