// Wednesday: Factorialize!
// Factorialize a Number
// Declare a function factorialize(n) that takes an integer n as input and returns the factorial of the provided integer.

// If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

// Factorials are often represented with the shorthand notation n!

// For example: 5! = 1 * 2 * 3 * 4 * 5 = 120


// check if the number is integer
// set the default answer for 0 an 1 to 1 
// Declare a function 
// for loop to multiply  n times 1 to next number
// multiply n times 1 to next number
// call the function with 



let answer = 1;
function factorial(n){
  if (n < 0){
    return "Number must be positive number"
  }else if (n <= 1){
    return answer
  }else{
    for (let index = 1; index < n ; index++){
      answer=answer * (index+1);
    }
    return answer
  }
}
console.log(factorial(5));
  
    
 