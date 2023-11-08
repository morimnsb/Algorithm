// Wednesday : Title Case a Sentence
// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lowercase.

// For the purpose of this exercise, you should also capitalize on connecting words like "the" and "of".

// For this algorithm, you can use the split() method.



// solution 1
// have a sentence  string 
// change string to lowercase and split it into words
// loop the array and make first letter(index [0]) of each part UpperCase
// join again the word and push it to result
// join the result and return it

const titleCase = str => {
  var result =[]
  let array = str.toLowerCase().split(" ")
  for (let item of array){
       item = item.split("")
       item[0] = item[0].toUpperCase()
      result.push( item.join(""))
  }
   console.log(result.join(" "));

  } 
titleCase("I'm a little tea pot");    // should return a string.
titleCase("I'm a little tea pot")  // should return "I'm A Little Tea Pot".
titleCase("sHoRt AnD sToUt")  // should return "Short And Stout".



// solution 2



const titleCase2 = str => {
  let result =[]
  let array = str.toLowerCase().split(" ")
  for (let item of array){ 
      result.push( item.slice(0,1).toUpperCase() + item.slice(1))
  }
   console.log(result.join(" "));
}
   titleCase2("I'm a little tea pot");  
   titleCase2("I'm a little tea pot")  // should return "I'm A Little Tea Pot".
   titleCase2("sHoRt AnD sToUt")  // should return "Short And Stout".
