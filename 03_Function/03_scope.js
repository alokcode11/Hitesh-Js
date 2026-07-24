// story of scope begins with let, var, const

// let a = 10;
// const b = 20;
// var c = 20; // Not worked as bloked scope || {} -> scope

// console.log(a); //10
// console.log(b); //20
// console.log(c); //30

// var c = 500  
// if (true) {
//   let a = 10;
//   const b = 20;
//   var c = 20;
// }

// console.log(a); // a is not defined || Correct because let is blocked scope so can't access outside the {scope}
// console.log(b); // b is not define 
// console.log(c); //30  || But here it print 30 becuse var is not aware about the scope || also override the global scope vlaue with the blocked scope value 

// let a = 300 
// if (true) {
//     let a = 10
//     const b = 20
//     var c = 30
//     console.log("Inner: ", a); // 10 || Blocked scope value 
// }

// console.log(a); // 300 || Global scope value

// Node ke andar global object 
// window ke andar global object 
// scope inside the console of the browser is diff from the node inside the terminal 


// Chote bacche bado se ice cream mang sakte hai but bade bacche chote se ni mang sakte 
// This same concept is called as Closure 
function one() {
    const userName = "alok"

    function two() {
        const website = "youtube"
        console.log(userName);
        
    }
    // console.log(website); // website is not defined  || next line two() ye excute ni hua due to line by line 
    two() // alok
}

one()

// whenever u declare and call function unke liye alag ek call stack banta hai means alag scope 

if (true) {
    const userName = "alok"
    if (userName === "alok") {
        const website = " youtube"
        console.log(userName + website);    // alok youtube
    }
    // console.log(website); // website not defined 
}
// console.log(userName); // userName is not defined 

console.log(addOne(5)); // 6 || No error || only decleartion that's why it execute 
function addOne(num) {
    return num + 1
}


// Hoisting concept
// we called it expression || variable can hold anything 
addTwo(5) // got error || here declare as well as assign to a variable that holds the function value 
const addTwo = function (num) {
    return num + 2
}


