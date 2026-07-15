// Primitive Data Types

const score = 100; // Number
const scoreValue = 101.11; // Number

const loggedIn = false; // Bollean

const temp = null; // Null (Empty value)

let userMail; // undefined or you can simply declare undefined

const id = Symbol("123"); // Return type is symbol
const anotherId = Symbol("123"); // Look like both are same but the symbol make it unique

console.log(id === anotherId); // false | value same but return value is not same

const bigNumber = 232334345435435435n; // js use BigInt in the backend

//we dont know which data type is so use typeof
console.log(typeof score); //number
console.log(typeof scoreValue); //number
console.log(typeof loggedIn); //boolean
console.log(typeof temp); // object : null is an object
console.log(typeof userMail); // undefined
console.log(typeof id); //symbol
console.log(typeof bigNumber); //bigint


// Non Premitive Data Types

const heroes = ["shaktiman", "nagraj", "doga"]; //Array

let obj = {
  name: "alok", // { } -> value inside the curley braces is an object
  age: 22, // dataTypes may be different : string, number, bollean, function or array 
};

// function is treated as variable 
const myFunction = function() {
    console.log("Hello world!");
    
}

  console.log(typeof heroes); // object
console.log(typeof obj); // object
console.log(typeof myFunction); // function data type is function | we call it object function 

// Inside Browser console
console.log(typeof window); //object
console.log(typeof document); //object
console.log(typeof console); //object





