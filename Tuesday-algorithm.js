// Tuesday: JS Intermediate

// 1. Addition
// Add all the values between 200 and 2700 (inclusively) that are divisible by 3 or 5, but not both 3 and 5. 

// a variable to add the selected numbers
// for loop from 200 to 2700
// condition to check divisible by 3 or 5
// check if selected number only be divisible by 3 or 5 and not both 
// add the correct number by result 
// call result 

var result = 0;
for (let i = 200; i <= 2700 ; i++){
  if (i % 3 == 0 && !i % 5 == 0 || !i % 3 == 0 && i % 5 == 0  ){
    result+= i;
  } 
}
console.log(result);




// 2. Shift the Values

// Given any array X, for example [2,1,6,4,-7], create an algorithm that shifts each number by one to the front. When your program is done the output for array [2,1,6,4,-7] should be [-7,4,6,1,2].

// first algorithm

// have an array 
// make another Array for result
// for loop through the array
// push items in order of  largest index into the new array
// call it 


let x2 = [2,1,6,4,-7];
for(let i = x2.length; i >= 0 ; i--){
  x2.push(x2[i]);
  x2.splice(i, 1);
}
console.log(x2);



// 3. FizzBuzz

// Create an algorithm that inserts the numbers from 1 to 135 into an array, while replacing the values that are divisible by 3 with the word "Fizz", the numbers that are divisible by 5 with the word "Buzz", and the numbers that are divisible with 3 and 5 with the word "FizzBuzz". Your output should look like [1,2, 'Fizz',4, 'Buzz', 'Fizz',7, 8, ...]



//1 an array for result and while loop with a counter variable 
//2 loop through the numbers from 1 to 135
//3 condition to replacing the values that are    divisible by 3 with the word "Fizz", the numbers that are divisible by 5 with the word "Buzz", and the numbers that are divisible with 3 and 5 with the word "FizzBuzz" 
//4 print the result as an array 
let result3 = [];
let counter2 = 1;
while (counter2 < 135) {

  if(counter2 % 3 == 0 && counter2 % 5 == 0) {
    result3.push("FizzBuzz")
  }else if(counter2 % 3 == 0){
    result3.push("Buzz")
  }else if(counter2 % 5 == 0){
    result3.push("Fizz")
  }else {
    result3.push(counter2)
   }
   counter2 ++
}
console.log(result3);




// 4. Fibonacci

// For a Fibonacci sequence starting at 0 and 1 add up all the values below 1,000,000.

// A Fibonacci sequence is an infinite series of numbers that is created by adding the last two numbers in the series. A series would start with the numbers 0 and 1 in place, followed by 1 (0+1), 2 (1+1), 3 (1+2), 5 (3+2), etc.

// 0 1 1 2 3 5 8 13 21...

// have an array with [0,1] value 
// for loop trough 0 ro 1000000
// push the result of two last items to the array 
// call it 
let arr=[0,1];  
for (let i= 2 ; i < 1000000; i++){
  arr.push((arr[i-1] + arr[i-2]))
}
console.log(arr);




// 5. Remove the Negative

// Given any array X, for example [1,-2,4,1], remove the negative numbers, so that the output becomes: [1,4,1].

// have an array 
// for loop 
// remove items less than 0 
// call result 

let arr2 = [1,-2,4,1];
for (let i = 0; i < arr2.length; i++){
  if (arr2[i] < 0){
    arr2.splice(i, 1);
  }
}
console.log(arr2);



// 6. Communist Censorship

// Given the array of strings X = ['Man', 'I','Love','The','Matrix','Program'], replace every letter of the word Program with *, so the output would be ['Man', 'I','Love','The','Matrix','*******']. Then make your algorithm work for any word of your choice

// have an array 
// make a function with two params
// map() the array to find word "program"
// replace * for each letter of word 
// call the function 


let array = ['Man', 'I','Love','The','Matrix','Program'];

function changeWord(array, word) {
  array = array.map((item) =>
    item === word ? "*".repeat(item.length) : item
  );
  console.log(array);
}
changeWord(array,"Program");


