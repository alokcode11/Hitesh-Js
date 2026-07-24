// Es 6 update arrow function
// this : point to current context

// Arrow function ke andar this nhi hota hai || rati ratai
const user = {
  userName: "alok",
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.userName},welcome to website`); // this for the current context inside the user scope
    console.log(this); // refers to user object || user.welcomeMessage() for this for the next one name become sam 
    //         {
    //   userName: 'alok',
    //   price: 999,
    //   welcomeMessage: [Function: welcomeMessage]
    // }
  },
};

// this // yaha bhi current context kuch hoga
user.welcomeMessage(); // alok welcome to website  || yaha tak current context same that

user.userName = "sam"; // context change
user.welcomeMessage(); // sam welcome to website
console.log(this); // {} || becuase we are undr node environment or global ke andr koi context ni hai 


// when we do console.log(this) inside the console of the browser it gives us window 
// pehle js ko execute karne ka ek hi tarika tha browser ke andar means is at only one place ie. browser 
// Ab hume engine ko nikla and these are like node , deno, bun
// right now we have standalone engine 
// browser ke andar agar engine run karta hai to this => window global object ko refer kar rha hota hai 

// function ke andar this ko call krne pe bhut sari values aa rhi hai 
function one() {
    let userName = 'alok'
    console.log(this.userName); // undefined 
    
}
one(); // actually this context is only worked upon object not on function 

const chai = function () {
    let userName = 'alok'
    console.log(this.userName); // undefined 
}
chai()

//Arrow function 

// Explicit return 
const chai1 = () => {
    let userName = 'alok'
    console.log(this.userName); // undefined 
}
chai1()

const addTwo = (num1, num2) => {
    return num1 + num2
}

console.log(addTwo(2, 3)); //5 

//Implicit return 
// Not use parenthesis 
// man leta hu apne return keyword likha hua hai 
const addThree = (num1, num2) =>  num1 + num2
const addThree2 = (num1, num2) =>  (num1 + num2) // suitable way reliable for react 
const addThree3 = (num1, num2) => {userName : "alok"} // undefine || agar object return karna ho to 
// Object return karne ke liye parentheses () me wrap karna hoga 
const addThree3 = (num1, num2) => ({userName : "alok"}) 


console.log(addThree(2, 8)); // 10 

// {} curley braces me wrap kara to return keyword likhna pdega () parenthesis me ni likhna padega 

// const myArr = [2,3,4,5]
// myArr.forEach(function () {})
// myArr.forEach(() => {})
// myArr.forEach(() => ())





