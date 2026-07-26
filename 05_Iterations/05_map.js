// map 
// it also takes callback function 

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// add 10 to every element 
myNums = nums.map( (num) => { return num + 10}) // other wise object []

// chaining 
// first * 10 -> +1 -> then apply filter greater than 30 
myNums2 = nums.map( (nums) => nums * 10 ). map( (nums) =>  nums + 1).filter( (nums) => nums > 30 )


console.log(myNums2);
