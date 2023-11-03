// Firday: 3rd Highest Number in Array
// Having an array of numbers, write an algorithm that will return the 3rd highest number in the array. Your algorithm should do only one iteration of the array (just one for/while loop).

// Example:

// Using the array [5, 2, 8, 20, -2, 0, 11, 7, 3, 9, 31], the correct answer is : 11


// Have an array 
// sort from big to small 
// call the third Element


var array = [5, 2, 8, 20, -2, 0, 11, 7, 3, 9, 31]
array.sort(function(a,b){return b - a;});
console.log(array[2]);
