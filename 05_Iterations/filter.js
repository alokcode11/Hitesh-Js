const coding = ["java", "python", "c", "cpp", "js", "pascal"];

// store it in a variable
const values = coding.forEach((item) => {
  console.log(item);
  return item; //undefined || manually humne bataya return karo
});

// forEach not return value
console.log(values); // undefined

// Filter
// ye bhi callback function leta hai
// not like forEach ye apko value return karta hai
const nums = [1, 2, 4, 6, 8, 9];

const newNums = nums.filter((num) => num > 5); // condition
console.log(newNums); // [ 6, 8, 9 ]

// if you define want return insdie { scope } you have to explicity write there return
const newNums1 = nums.filter((nums) => {
  nums > 5;
}); // this gives you [] i means it return object

//forEach
const newNums2 = [];
nums.forEach((num) => {
  if (num > 4) {
    newNums2.push(num);
  }
});
console.log(newNums2); // [ 6, 8, 9 ]

// practice on filter
const books = [
  { title: "Atomic Habits", genre: "Self-Help", publish: 2018, edition: 2021 },
  { title: "The Alchemist", genre: "Fiction", publish: 1988, edition: 2014 },
  { title: "Sapiens", genre: "History", publish: 2011, edition: 2015 },
  { title: "Clean Code", genre: "Technology", publish: 2008, edition: 2020 },
  {
    title: "The Silent Patient",
    genre: "Thriller",
    publish: 2019,
    edition: 2022,
  },
  {
    title: "A Brief History of Time",
    genre: "Science",
    publish: 1988,
    edition: 2017,
  },
  {
    title: "Rich Dad Poor Dad",
    genre: "Finance",
    publish: 1997,
    edition: 2022,
  },
  { title: "Wings of Fire", genre: "Biography", publish: 1999, edition: 2015 },
  {
    title: "The Psychology of Money",
    genre: "Finance",
    publish: 2020,
    edition: 2023,
  },
  { title: "Ikigai", genre: "Self-Help", publish: 2016, edition: 2020 },
];

// filter whose genre is history 
const userBooks = books.filter((bk) => bk.genre === "History");

//books publish after 2004
const userBooks1 = books.filter((bk) => {bk.publish > 2004}) // []
const userBooks2 = books.filter((bk) => {
    return bk.publish > 2004
}) 

//  genere is finance or publish after 2010
const userBooks3 = books.filter( (bk) => {
    
    return bk.genre === "Finance" || bk.publish > 2010
})
 

console.log(userBooks3);

