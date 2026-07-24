// shopping card pata nhi hota kitne order hone wale hai
// i mean you dont know the size of the array

function calculateCartPrice(num1) {
  return num1;
}

console.log(calculateCartPrice(200, 400, 500)); // 200
//first item to aa gaya baki skip ho gaya hai

// isko overcome karne ke liye rest operator ka istemal karte hai
// same operator is called as rest or spread operator according to the use case
function calculateCartPrice1(...num1) {
  // rest operator || Bundle me pack krke de do
  return num1;
}
console.log(calculateCartPrice1(200, 400, 500)); // [ 200, 400, 500 ]

function calculateCartPrice1(val, val2, ...num1) {
  return num1;
}
console.log(calculateCartPrice1(200, 400, 500, 600, 1000)); //[ 500, 600, 1000 ]

const user = {
  userName: "alok",
  price: 199, // if we change the price to prices ||Username is alok and price is undefined
};

function handleObject(anyobject) {
  console.log(`Username is ${anyobject.userName} and price is ${anyobject.price}`);
}

handleObject(user) //Username is alok and price is 199

// In typescript auto typechecking 

handleObject({ // this is also an object
    userName : "alex",
    price : 299
}) //Username is alex and price is 299

const myNewArr = [1, 2, 4, 4]

function secondVal(getArr) {
    return getArr[1]
}
console.log(secondVal(myNewArr)); // 2
console.log(secondVal([1, 5, 6])); // 5




