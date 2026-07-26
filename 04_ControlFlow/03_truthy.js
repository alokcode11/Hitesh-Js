const userEmail = "a@gmail.com"

// some value inside string is treated as true value here 
// here we have not checked that userEmail == h@gmail.com
if(userEmail) {
    console.log("got user email");
    
} else {
    console.log("dont have user email");
    
} 

// falsy value 

// false , 0, -0, BigInt 0n, null, undefined, NaN, ""

// truthy value 

// true, " ", "0", "false", [], {}, function() {}

// detect array is emptu or not 
if (userEmail.length === 0) {
    console.log("array is empty");
    
}

// detect object is empty or not 
const empObj = {}
if (Object.keys(empObj).length === 0) { // Object.key() -> converted into array then check length
    console.log("object is empty");
    
}

// false == 0  true 
// false == "" true 
// 0 == "" true 

// Nullish Coalescing operator (??) : null, undefined 

let val1;
val1 = 5 ?? 10

console.log(val1); // 5

// yaha to expected hai 5 then use kya hai 
// kai baar jab ap database se call krnge ya firebase ka use krnge directly apko response ni milta hai 
// apko do values milti hai 
// chances hai ki apke pass null response aa jaye 
// ya respoonse aye hi na undefined aa jaye 
// us case me poora ka poora code structure unstable ho skta 
// for that cass this nullish coalescing operator made 

// value null ho to null assign karlo 
// undefined ho to ok 
// value aa rhi to value assign karlo 

let val2;
val2 = null ?? 10 //(or conplex function) // O/P 10 || Null value then safety check 

let val3; 
val3 = undefined ?? 16 // 16

let val4

val4 = null ?? 10 ?? 20 // 10

// Terniary Operator
// condition ? true : false 

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("greater than 80")


