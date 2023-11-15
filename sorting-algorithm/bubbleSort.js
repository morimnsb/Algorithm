//Pseudocode
// make a function that takes an Array as input
// in a while loop  ,Take and compare each pair of 2 adjacent numbers and destruct them in small order
// return Array

let arr= [1,5,3,77,54,7,-9,-57,23,65,41,12,2,0]

function bubbleSort(arr){
  for (let i = 0; i < arr.length; i++) {
     while (arr[i] > arr[i+1]) {
      [arr[i + 1], arr[i]] = [arr[i], arr[i + 1]];
      i--
     }
  }
  return arr
}
console.log(bubbleSort(arr));
