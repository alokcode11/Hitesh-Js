//Array specific loops
// For of
// Not only specific for the object
// for (const element of object) {
//     // element is the i(iteratir here)
//     // Object refer to arr or any continious data
// }

// object under aaray
[{}, {}, {}, {}];

const arr = [1, 2, 3, 4, 5];

for (const element of arr) {
  console.log(element);
}

const greetings = "Hello World!";
for (const greet of greetings) {
  console.log(`Each character is ${greet}`);
}

// Maps : like array
// Object that hold key value pair
// Order of insertion remember
// No duplicates value there
const map = new Map(); // object
map.set("In", "India");
map.set("USA", "America");
map.set("FRA", "France");

console.log(map); // Map(3) { 'In' => 'India', 'USA' => 'America', 'FRA' => 'France' }

for (const element of map) {
  console.log(element);
  //   ["In", "India"][("USA", "America")][("FRA", "France")]
}

//[key, value] destructuring of the array
for (const [key, value] of map) {
  console.log(key, ":-", value);
//   In: -India;
//   USA: -America;
//   FRA: -France;
}

const myObj = {
    'game1' : 'NFS',
    'game2' : 'Spiderman'
}

// for (const [key, value] of myObj) {
//     console.log(key, ":-", value);  // myObj is not iterable
// }

// For in Loop not only to object 
const myObj1 = {
    'js' : 'javascipt',
    'cpp': 'cpp',
    'rb' : 'ruby',
    'py' : 'python'
}

for (const key in myObj1) {
   console.log(key); // key 
   console.log(myObj1[key]);// value
   console.log(`${key} shortcut for ${myObj1[key]}`);
   
}

// For in on array 
const programming = ['js', 'ruby', 'python', 'cpp']

for (const key in programming) {
    // console.log(key);
    //for of me array ki sari value print kr rha tha key 
    // lkin for in me index print kar rha hai 

    // for value 
    console.log(programming[key]);
}

// For in on map 
for (const key in map) {
    console.log(key);
    // No error but map is not iterateable     
    
}


