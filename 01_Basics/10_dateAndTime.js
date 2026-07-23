let myDates = new Date();

console.log(typeof myDates);

console.log(myDates.getMonth() + 1); // Because it follow the zero based indexing 
console.log(myDates.getDate()); //gives date 
console.log(myDates.getFullYear()); // gives year 
console.log(myDates.getHours());//
console.log(myDates.getTimezoneOffset());// -330 ||  UTC aur local time ka difference, minutes mein
console.log(myDates.getMilliseconds());// current second ka milliseconds || 0-999



console.log(myDates); // 2026-07-23T20:48:11.286Z || in miliseconds so not a readable format 
console.log(myDates.toString()); // Fri Jul 24 2026 02:24:04 GMT+0530 (India Standard Time) || some readability is there 
console.log(myDates.toDateString()); //Fri Jul 24 2026
console.log(myDates.toISOString());//2026-07-23T21:00:06.563Z
console.log(myDates.toJSON());//2026-07-23T21:00:06.563Z
console.log(myDates.toLocaleDateString());//7/24/2026
console.log(myDates.toLocaleString());//7/24/2026, 2:30:06 AM
console.log(myDates.toTimeString());//02:30:06 GMT+0530 (India Standard Time)
console.log(myDates.toUTCString());//Thu, 23 Jul 2026 21:00:06 GMT
console.log(myDates.getTimezoneOffset());//-330

let myCreatedDate = new Date(2026, 0, 23);
console.log(myCreatedDate.toDateString());//Fri Jan 23 2026 || Bydefault it give Fri

let myCreatedDate1 = new Date(2026, 0, 23, 5, 3);
console.log(myCreatedDate1.toLocaleString());//1/23/2026, 5:03:00 AM

let myCreatedDate2 = new Date("2026-01-14"); 
console.log(myCreatedDate2.toLocaleString());//1/14/2026, 5:30:00 AM || Here no zero based month

// Js genrally "DD-MM-YYYY" format ko reliable recognize nahi karta 
// Follow ISO Format YYYY-MM-DD
let myCreatedDate3 = new Date("14-01-2025");
console.log(myCreatedDate3.toLocaleString()); //Invalid Date

const [day, month, year] = "14-01-2025".split("-").map(Number);
let myDatex = new Date(year, month - 1, day); 
console.log(day, month, year);//14 1 2025
console.log(myDatex); //2025-01-13T18:30:00.000Z

// when we have to check the exact time stamp value for quiz design
// fastest polls 
let myTimeStamp = Date.now();
console.log(myTimeStamp); //1784842025562 || milliseconds passed since 1 January 1970, 00:00:00 UTC 
console.log(myDatex.getTime());// 1736793000000 || IN milliseconds for the comparing 

console.log(Math.floor(Date.now() / 1000)); //1784842445 || Gives value in seconds 

// Ctrl + space give you all the properties 
// default -> Internationalization
myDates.toLocaleString('default', {
    weekday: "long", // Monday 
})







