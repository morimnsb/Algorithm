// Tuesday : Selection Sort

//Pseudocode

// make a function that takes a array 
// loop the array and compare each index with the rest by another for loop  
// check and replace smaller number by the bigger number
// return Array

let arr= [1,5,3,77,54,7,-9,-57,23,65,41,12,2,0]
function selectionSort(arr){
  for (let i=0; i<arr.length; i++) {
    for (let j = i ; j < arr.length; j++) {
    if (arr[i] > arr[j] ) {
      [arr[j], arr[i]] = [arr[i], arr[j]];
    }}}
  return arr
}
console.log(selectionSort(arr));
