// // if

// // false then this if condition is not going to execute
// if(condition) { // condition true then execute

// }

// const isLoggedIn = true
// if(isLoggedIn) {
//     // this will execute
// }

// // Comparison operator
// // < less than
// // > greater than
// // <= less than equal to
// // >= greater than equal to
// // = assignment
// // == checkonly value
// // != not equal
// // === it also check the type  (2 === "2") -> false
// // !==

// const score = 200

// if(score > 100) {
//     const power = "fly"
//     console.log(`user power: ${power}`);

// }
// console.log(`user power : ${power}`); // power is not defined || scope issue

//Shorthand Notation
// No need to declare there { } scope

// const balance = 1000

// // Implicit scope -> maan lia ki scope hai
// if(balance) console.log("test");

// // we can also right here multiple lines using (,)
// // Not a good practice
// if(balance) console.log("test"),
// console.log("Implicit scope"); // test Implicit scope

// Nesting
// const balance = 1000;

// if (balance < 500) {
//   console.log("less than 500");
// } else if (balance < 750) {
//   console.log("less than 750");
// }else if(balance < 950) {
//    console.log("less than 950");
   
// }
// else {
//     console.log("gereater than 950");
    
// }


const loggedInFromGoogle = false
const loggedInFromEmail = true 

// koi bhi true scope activated 
if(loggedInFromEmail || loggedInFromGoogle ) {
    console.log('User logged In');
    
}
