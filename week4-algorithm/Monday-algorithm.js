// Monday: Largest Number in Arrays
// Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

// Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].


// have an array
// for loop through the elements and find the biggest sub-Array
// return the result 




function largestOfFour(arr) {
  for (let i = 0; i < arr.length; i++){
    arr[i]= Math.max.apply(null,arr[i])
  }
  return arr;
}
console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]))
