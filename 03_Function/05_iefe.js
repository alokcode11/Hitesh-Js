// Immediately Invoked Function Expression (IEFE)\

// jaise hi apne function likha turant hi execute karwana hai 
// file that has only database connection 

// Hum ni chahte function i mean scope ke andar koi gloable variable problem kare 
// jasie hi function complete ho execute ho jaye 
// bacche to bado se mang sakte hai 
// Jo bhi aap function me declare kar rhe hai kai bar woi gloabal variable se pollute ho jate hai 


function one() {
    console.log(`DB Connected`);
    
}
one(); // yaha ye immediately Invoked function ho gaya hai 
// Lkin us chij ke liye kya kare jaha global variable se value pollute hoti hai 

// IEFE 
(function two() {

})(); // immediately invoked function invoke to ho gaya hai pta ni hai kaha rokna hai 

// () ()   function defintion =>  function call 

// gives error jab tak upar wale IEFE me semi colon (;) nahi lagte hai 
// does not matter the function is the normal function or the arrow function 

// named IEFE
(function two() {

})(); 

( (name) => {
    console.log(`${name}`);
    
})("alok"); //alok