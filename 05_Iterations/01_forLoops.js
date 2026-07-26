// For Loop

// Initialization'
//Condition check 
// updation 

for(let i = 0; i <= 10; i++) { // ctrl + D gives the reference to copy of the selected element
    if (i == 7) {
        console.log("7 is best no");
        
    }
    const element = i;
    console.log(element);
    
}

// Nested for loop 
for (let i = 1; i <= 10; i++) { // for every i, j runs 10 times 

    console.log(`Outer loop value ${i}`);
    
    for (let j = 1; j <= 10; j++) {
        
        console.log(`Inner loop value ${j} and inner loop ${i}`);
        console.log( i + '*' + j + " = " + i * j );
        
        
    }
    
}

// lets suppose run for loop on an array and i got out of range then it will print undefined 

// break 

for (let index = 1; index <= 20; index++) {
    if (index == 7) {
        console.log(`Detected 7`);
        break
    }
  console.log(`value of i is ${index}`);
  
}

// continue 
for (let index = 1; index <= 20; index++) {
    if (index == 7) {
        console.log(`Detected 7`);
        continue // ek baar maaf kardo || skip the current iteration 
    }
  console.log(`value of i is ${index}`);
  
}