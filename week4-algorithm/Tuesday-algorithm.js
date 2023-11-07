// Tuesday: Find the longest Word in a String
// Return the length of the longest word in the provided sentence.

// Your response should be a number. For these algorithms you are allowed to use the split() method.

// findLongestWord("The quick brown fox jumped over the lazy dog")should return a number.
// findLongestWord("The quick brown fox jumped over the lazy dog")should return 6.
// findLongestWord("May the force be with you") should return 5.




// have a multi string 
// split it into words an store in an array
// loop through array to find the length of each word
// log the longest word

const findLongestWord = str => {
  str= str.split(' ')
  let longestWord = " "
  for (let word of str){
    if (word.length > longestWord.length){
      longestWord = word 
  }  
}
console.log(longestWord.length);
}
findLongestWord("The quick brown fox jumped over the lazy dog");