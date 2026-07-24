// Object literals : Object declare karne ka tarika

myArr = ["H", "i"]; // Only way to access the array ie. myArr[1]
//But in case of obj u can define keys and value and key may be anything like string number etc...
// Keys are treated as string but we dont use ""

// object.create -> This is the constructor method and isi ke andar singleton banta hai

const user = {};

// Symbol data types
const symb = Symbol("key1"); // use this symbol as key

const jsUser = {
  name: "Alok", // value may be string, Number, boolean, object , array , function , another object anything
  "full name": "Alok Kumar", // This value cant be access using dot that's why jsUser["full name"] ie square notation
  // symb : "myKey1", // Not complaint but symb is not a not a symbol data types it's string
  [symb]: "myKey1",
  age: 26,
  location: "patna",
  email: "alok@gmail.com",
  isloggedIn: false,
  lastLoginDays: ["Mon", "Tue"],
};

console.log(jsUser);
console.log(jsUser.name); // objects access || Not the only way
// console.log(jsUser[email]); //   email is not defined  || This gives error Because behind the scene this is string
console.log(jsUser["name"]);
// console.log(jsUser. full name); Gives error u can't access through the dot(.)
// console.log(typeof jsUser.symb); // Error ||  Normally it gives string
console.log(jsUser[symb]); // myKey1
console.log(typeof jsUser[symb]); // Error ||  Normally it gives string

//Access using . or square notation
// Update or chnage value
jsUser.email = "jt@gmail.com"; // value override

// if we have to lock the value
// Object.freeze(jsUser); // after this we are unable to change the value of the jsUser object

// Function is treated as type 1 citizenship
// No descrimination ap unko variable ki tarah treat kar skte hai

jsUser.greeting = function () {
  console.log("Hello js users");
};

console.log(jsUser.greeting);// [Function (anonymous)] || function exexute ni hua uska reference aya hai 
console.log(jsUser.greeting());// Hello js users  || when you refer any method 

// this means same object ko reference karna 
jsUser.greeting2 = function () {
    console.log(`Hello jsUser, ${this.name}`) // nname insdie the object usko reference karna hai 
     // return nahi hai, so function automatically undefined return karega
}
// undefined isliye aa rahe hain kyunki aap functions ko console.log() ke andar call kar rahe ho
// Function ke andar already console.log() hai, lekin functions kuch return nahi kar rahe:
console.log(jsUser.greeting2()) // Hello jsUser, Alok
                                // undefined  Extra output that is reflected in the console

 