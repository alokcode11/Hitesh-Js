const marvelHeros = ["Thor", "Ironman", "Spiderman"]
const dc = ["Superman", "Flash", "Batman"]

marvelHeros.push(dc)
console.log(marvelHeros); //[ 'Thor', 'Ironman', 'Spiderman', [ 'Superman', 'Flash', 'Batman' ] ] || array under array here treated as single element on the 3 index
console.log(marvelHeros[3]);// ['Superman', 'Flash', 'Batman' ]
console.log(marvelHeros[3] [1]);// Flash

let allHeros = marvelHeros.concat(dc)
console.log(marvelHeros); //[ 'Thor', 'Ironman', 'Spiderman'] || normally it print something like this but when we assign it to a varible it concat 
console.log(allHeros);//[ 'Thor', 'Ironman', 'Spiderman', 'Superman', 'Flash', 'Batman' ]

// Alternative : Spread Operator 
const allNewHeros = [...marvelHeros, ...dc] //here  we can add two or more that is the limitation of concat 
console.log(allNewHeros); //[ 'Thor', 'Ironman', 'Spiderman', 'Superman', 'Flash', 'Batman' ]

const anotherArr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const realAnotherArr = anotherArr.flat(Infinity); // declare the depth and parse all the element into single array means spread out 
console.log(realAnotherArr);//[1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]

//Array.from→ Kisi iterable/array-like value ko array mein convert karta hai.
// Array.isArray() check karta hai ki given value actual array hai ya nahi. Output hamesha true ya false hota hai.
console.log(Array.isArray("Alok")); //false 
console.log(Array.from("Alok")); //[ 'A', 'l', 'o', 'k' ] ||we can give there obj, string make into an array
console.log(Array.from({name : "Alok"})); //[] || batana pdega ki keys ka array ya value ka array 

let score1 = 100
let score2 = 200
let score3 = 300

// Makes individual value into array 
console.log(Array.of(score1, score2, score3)); //[ 100, 200, 300 ]







