// reduce 
// initial value 
// accumaltor 
// current value 


const nums = [1, 2, 3]


// writing technique 
const total = nums.reduce(function(acc, currVal) { return acc + currVal}, 0)

// visualization 
const total1 = nums.reduce(function(acc, currVal) {
    
    console.log(`acc: ${acc} and currVal: ${currVal}`);
    return acc + currVal
    
}, 0)

// In forms of arrow function 
const total2 = nums.reduce( (acc, curr) => acc + curr, 0)

// It applicable on array so covert the object into array 
const shoppingCart = [
    {
        itemName : "js course",
        price : 999
    },
    {
        itemName: "data science",
        price : 1099
    },
    {
        itemName: "Mern stack",
        price : 8999
    }
]

const priceToPay = shoppingCart.reduce( (acc, item) => (acc + item.price), 0)
const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price, 0)


console.log(priceToPay);

