const accountId = 1234 //value cant be changed
let accountEmail = "alok@gmail.com"
var accountPassword = "123alok"
accountCity = "patna"
let accountState

// accountId = 2 // not allowed 

accountEmail = "a@gmail.com"
accountPassword = "1234"
accountCity = "Delhi"

// Please dont use var bevause of the issue in block scope and functional scope 
/*
 we are not going to use var  
*/

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);


