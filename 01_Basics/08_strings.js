const name = "alok"
const repoCount = 50 

console.log(name + repoCount + "value"); // outdated 

// here we create placeholder what ever the variable you have you can inject inside this 
console.log(`My name is ${name.toUpperCase()} and my repoCount is ${repoCount}`); // string interpolation 

// Creates a String object, giving access to properties and prototype methods.
const gameName = new String("jyoti")

console.log(gameName[0]);
console.log(gameName.__proto__); // { } object looks empty but lots of value it have 

console.log(gameName); // jyoti 
console.log(gameName.length); // 5
console.log(gameName.toUpperCase()); // JYOTI not change the original string stack memory location is there 
console.log(gameName.charAt(2)); // o
console.log(gameName.indexOf('t')); // 3

const newString = gameName.substring(0, 4) // end is exclusive
console.log(newString); //jyot

const anotherString = gameName.slice(-8, 4) // start from end 
const anotherString1 = gameName.slice(-1, 4) // -1 means -1 + 5 = 4 (4, 4) print nothing 
console.log(anotherString); //jyot

// Positive Index  → Start counting from the beginning.

// Negative Index  → Start counting from the end.

// If (length + negativeIndex) < 0,
// JavaScript automatically treats it as 0.

// slice(start, end)
// ✔ Start is included.
// ❌ End is excluded.

const newStr1 = "      alok      "
console.log(newStr1);
console.log(newStr1.trim()); // remove the starting and ending space 


const url = "https://fundamatrix.com/alok%20kumar" //Browser not undrstand spaces 

console.log(url.replace('%20', '-'));
console.log(url.includes('alok'));

const newStr2 = new String('alok-kumar-chaurasiya')
console.log(newStr2.split('-')); // [ 'alok', 'kumar', 'chaurasiya' ]







