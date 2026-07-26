// ForEach loop
// mostly used on array are foreach and map
// these methods like foreach and map are already added into the prototype of the array
// array.forEach(element => {

// });

const coding = ["js", "ruby", "java", "python", "cpp"];

//  forEach : callback function means function de do mujhe
// ye function already aware hai ki length kya hai start, end kya hai
coding.forEach(function name() {}); // yha function ko callback kaha gaya hai

// so callback function ka name ni hota hai
// already smart so khud se iterate karega
// us value i mean parameter ko kuch bhi bol skte hai

coding.forEach(function (item) {
  console.log(item);
});

// we can also use their arrow function
coding.forEach((greet = () => {}));

// callback function hai to name remove krna hoga simple
coding.forEach((a) => {
  console.log(a);
});

function printMe(item) {
  console.log(item);
}

// function kahi ar bhi likha ho to bhi usko use kar skte hai
// ya fir directly whi pe function define kar skte hai

coding.forEach(printMe); // refernce dena execute ni karna hai

// aisa ni hai ki only ye item parameters leke ata hai
// it has index as well as array refernces
coding.forEach((item, index, arr) => {
  console.log(item, index, arr);
});

//Array of object 

const myCoding = [
    {
        langName : "js",
        langFile : "javaScript"
    },
    {
        langName : "py",
        langFile : "python"
    },
    {
        langName : "rb",
        langFile : "ruby"
    }
]

// iteration 
myCoding.forEach( (item) => { // every object is item of the array 
    console.log(item.langName); 
    console.log(item.langFile); 
    
})