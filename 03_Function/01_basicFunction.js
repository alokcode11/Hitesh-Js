// Function : Code inside a package
// can use their copies anywhere

console.log("H");
console.log("I");
console.log("T");
console.log("M");
console.log("A");
console.log("N"); // Bar bar likhna padta hai

// so for reusability we use function

function sayMyName() {
  //function definition
  console.log("H");
  console.log("I");
  console.log("T");
  console.log("M");
  console.log("A");
  console.log("N");
}

sayMyName; //reference
sayMyName(); // execution

// function addTwoNumbers(num1, num2) { // parameters
//     console.log(num1 + num2);

// }

function addTwoNumbers(num1, num2) {
  // parameters
  let result = num1 + num2;
  return result;
  console.log("afdsfd"); // ye kabhi execute ni hoga
}

addTwoNumbers(); // NaN no argument there
const result = addTwoNumbers(4, 6); // 10  || arguments || console doesnt mean it return the value
console.log("Result :", result); // undefined

addTwoNumbers(4, "6"); // 46
addTwoNumbers(4, "a"); // 4a
addTwoNumbers(4, null); // 4


// function loginUserMessage(username = "sam") || default value  
function loginUserMessage(username) {
  // undefined situation ko avoid karne ke liye
  if (username === undefined) { // "" , undefined ->> false value (!username)
    console.log("please enter a userName"); // iske output ke sth undefined ayega  
    return;
  }
  return `${username} just logged in`;
}

loginUserMessage("Alok"); // RETURN HO GAYA i mean execute hua LEKING PRINT NI HUA QKI HUMNE CONSOLE NI KIYA
console.log(loginUserMessage("abhi")); // abhi just logged in
console.log(loginUserMessage("")); // just logged in
console.log(loginUserMessage()); // undefined just logged in
