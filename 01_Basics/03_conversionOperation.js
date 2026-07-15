// let score = 23

// // const {score} = req.body // when we have to fetch value from the frontend into backend we dont know that this value is string or number 

// console.log(typeof score);
// console.log(typeof(score));

let score = "23"

// Here i am working from the backend and i want sureity that this one in Number only 

let valueInNumber = Number(score); // for sure convert into the number data type 
// console.log(typeof valueInNumber);

let isLoggedIn = 1

let bolleanLoggedIn = Boolean(isLoggedIn)

console.log(bolleanLoggedIn); // it gives true as an o/p

// For 0    : it gives false 
// For " "  : it gives false
// For "a"  : it gives true 

let No = 34

let stringNo = String(No);

console.log(stringNo);
console.log(typeof stringNo); // Number is converted into string i mean its data types


