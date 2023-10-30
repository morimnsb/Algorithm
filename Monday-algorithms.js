// 5. Find Max

// Have an array
// make variable for result
// for loop through the array 
// condition to find the max Number
// call it 

let X = [2,-3,-1];
let Max = 0;

for (item of X) {
  if (item > Max) {
    Max = item;
  }
}
console.log(Max);


// 6. Get Average

// Have an array
// make variable for result
// for loop through the array 
// sum all numbers and divide by the number 
// call it 

let  x2 = [10,20,30];
let Average = 0;

for (item of x2) {
  Average+= item;
}
console.log((Average/x2.length));




// 7. Eliminate the Negatives

// Have an array
// make variable for result
// for loop through the array
// condition to replace  negative numbers with 0
// call it 


let X3 = [2,-1,4,-3];


for (let i=0; i<X3.length; i++) {
  if (X3[i] < 0) { X3[i] = 0; }
}
console.log(X3);



// 8. Number to String

// Have an array
// make variable for result
// for loop through the array
// condition to replace  negative numbers with string
// call it 

let X4 = [2,-1,4,-3];


for (let i=0; i<X4.length; i++) {
  if (X4[i] < 0) { X4[i] = 'Turing'
  }
}
console.log(X4);