// Thursday: Palindrome Checker
// Check for Palindromes
// Declare a function isPalindrome(str) that takes a string as an input.

// Return true if the given string is a palindrome. Otherwise, return false.

// A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

// make the function 
// revers the string 
// condition if is reverse string equal to string 
// call it 

function isPalindrome(str){
  str = str.toLowerCase();
  let reverseString ="";
  for (let i = str.length ; i >0 ; i--) {
  if (str == reverseString){
    return true;}
  else{  return false;}
}
console.log(isPalindrome("test"));

