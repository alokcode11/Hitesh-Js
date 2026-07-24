// Destructuring : Objects

const course = {
    courseName : "js in hindi",
    price : 999,
    courseInstructure : "Alok"
}

course.courseInstructure  // using dot(.) || baar-baar likhna padta hai 
course["price"] // using bracket notation

// usko overcome karne ke liye destrcturing ka istemal karte hia 
// like kya kya vlaue hume chhaye course object se 

const {courseInstructure} = course 
const {courseInstructure : instructor} = course // we can also give them another name  

console.log(course.courseInstructure); // ye hume ab likne ki jarrort ni 
console.log(courseInstructure); // because of destructuring 
console.log(instructor); //Alok

const navbar = ({company}) => { // props.company -> {company}

}
navbar(company = "Fundamatrix")


// Jab bhi apkna kaam kisi ar ke sar pe daal dena usko api kehte hai 
// waiter ko kehte hai burger leke aao 
// Api is nothing but the value comes from the backend and aap usko kaise likhte hai 
// pehle xml me ati thi 
// ab json {} me 

// XML: Extensible Markup Language — Data ko tags ke format mein store aur transfer karta hai.
{/* <user><name>Alok</name><age>26</age></user> */}

// JSON: JavaScript Object Notation — Data ko lightweight key-value format mein store aur transfer karta hai.
// {"name": "Alok", "age": 26} 
// Simililar to object but not assigned to any variable or we can say it has name 
// JSON mein keys always double-quoted strings hoti hain, but values string, number, boolean, null, array ya object ho sakti hain.

// lets suppose we have any url where json data hold and we know objects and we want to fecth that data for purpose 
// we got response now convert into object and then fecth each value 

// api also in the format of array [{}, {}, {}, {}] 
// https://randomuser.me/ -> Famous api for learning 

// in this data there is the problem in finding the meaning of the data so there are multiple tools to undrstand the meaning of the data  (json formatter, json Crack)





