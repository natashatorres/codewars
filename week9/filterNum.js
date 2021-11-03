/*

Oh no! The number has been mixed up with the text. Your goal is to retreive the number from the text, can you return the number back to it's original state?

Task
Your task is to return a number from a string.

Details
You will be given a string of numbers and letters mixed up, you have to return all the numbers in that string in the order they occur.

*/

var FilterString = function(value) {
  
    return parseFloat(value.split('').filter(item => !isNaN(parseInt(item))).join(""))
     
}

console.log(FilterString("1a200a3a"))


/*
parameter: str with letters and number
return: the number in the string
example:
"123" -> 123
"a1b2c3" -> 123

pseduo code:
turn into array
filter
use filter method with number
what I googled:


*/