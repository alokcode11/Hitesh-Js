// [] -> Square Bracket
// () -> Parenthises
// {} -> Braces/Curley Braces 


const myArray = [0, 1, 2, 3, 4, 5]; //Simple Array  || 1 -> Element
console.log(myArray[0]); //0


// Elements may be numbers, string, booleans any data type premitive or non -premitive 
const myArray1 = [
  10,                       // Number — primitive
  "Alok",                   // String — primitive
  true,                     // Boolean — primitive
  null,                     // Null — primitive
  undefined,                // Undefined — primitive
  123n,                     // BigInt — primitive
  Symbol("id"),             // Symbol — primitive

  { name: "Alok" },         // Object — non-primitive
  [1, 2, 3],                // Array — non-primitive
  function greet() {},      // Function — non-primitive
  new Date()                // Date object — non-primitive
];
 
const myHeros = ["hatim", "shakitman"]
const myArr = new Array(1, 2, 3, 4, 5)

// Array has length properties 
// and rest are methods 

// Array Methods 
myArr.push(6) //[ 1, 2, 3, 4, 5, 6 ]
myArr.push(7) //[ 1, 2, 3, 4, 5, 6, 7 ]
myArr.pop() //[ 1, 2, 3, 4, 5, 6 ]

myArr.unshift(0) // push 0 from the front || sari value shift karni padi 
console.log(myArr); //[ 0, 1, 2, 3, 4, 5, 6 ]

myArr.shift() // remove from the front 
console.log(myArr); //[ 1, 2, 3, 4, 5, 6 ]

console.log(myArr.includes(9)); //false 
console.log(myArr.indexOf(9)); //-1 

const newArr = myArr.join(); // typeof become string after join 
console.log(myArr); //[ 1, 2, 3, 4, 5, 6 ]
console.log(newArr); //1,2,3,4,5,6

// slice and splice 
console.log("A", myArr); //A [ 1, 2, 3, 4, 5, 6 ]
const myn1 = myArr.slice(1,3) // start is inclusive and end is exclusive 

console.log(myn1); //[2, 3]
console.log("B", myArr); //A [ 1, 2, 3, 4, 5, 6 ] || It is not going to change the orignial array 

const myn2 = myArr.splice(1, 3) // most people tell that end is also inclusive but it is wrong 
console.log(myn2); //[ 2, 3, 4 ]
console.log("C", myArr); //C [ 1, 5, 6 ] || Original array change i mean splice part is removed from there 











