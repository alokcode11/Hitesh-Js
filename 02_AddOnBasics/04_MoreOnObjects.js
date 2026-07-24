// Singleton 

const tinderuser = new Object() //singleton 
const tinderuser = {} // Non-singleton 

tinderuser.id = "123abc"
tinderuser.name = "Sam"
tinderuser.isLoggedIn = false 

console.log(tinderuser);// {}

const regularUser = {
    email : "some@gmail.com",
    fullName : {
        userFullName : {
            firstName : "Alok",
            lastName : "Kumar"
        }
    }
}

console.log(regularUser.fullName); //{ userFullName: { firstName: 'Alok', lastName: 'Kumar' } }
console.log(regularUser.fullName.userFullName); //{ firstName: 'Alok', lastName: 'Kumar' }
console.log(regularUser.fullName.userFullName.firstName); //Alok

// Optional Chaining || can call it concationation 
console.log(regularUser.fullName?.userFullName.firstName); // if exist otherwisse in further lecture 

const target = {1 : "a", 2 : "b"}
const source1 = {3 : "a", 4 : "b"}
const source2 = {5 : "a", 6 : "b"}

const merge = {target, source1, source2} // put the source1 and source2 into the target || all value inside the target 
console.log(merge); //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
// {
//   target: { '1': 'a', '2': 'b' },
//   source1: { '3': 'a', '4': 'b' },
//   source2: { '5': 'a', '6': 'b' }
// }

const merge2 = Object.assign({}, target, source1, source2) // sari value to combine karke { } target me daal do || all  value goes insdie the {} empty objeect 

console.log(merge2); //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

const merge3 = {...target, ...source1, ...source2}
console.log(merge3); //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }


// whenever value comes from database in forms of array of objects 
const users = [
    {
        id : 1,
        email : "a@gmai.com"
    },
    {
        id : 2,
        email : "b@gmai.com"
    }
    
]

//Loop through array of objects 
users[1] // first value access krna hai users[1]
users[1].email // wo ek obj hai to dot notation se internal data ko access kar skte hai 


// tindrUsers ki saari key chahye || Most used
console.log(Object.keys(tinderuser)); // Object.keys kiski tinderUsers ki || [ 'id', 'name', 'isLoggedIn' ] array datatype
console.log(Object.values(tinderuser)); //[ '123abc', 'Sam', false ]
console.log(Object.entries(tinderuser)); //[ [ 'id', '123abc' ], [ 'name', 'Sam' ], [ 'isLoggedIn', false ] ] || Key-value format 

console.log(tinderuser.hasOwnProperty('isLoggedIn')); // true 












