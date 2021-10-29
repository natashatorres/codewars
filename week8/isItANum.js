/*

Given a string s, write a method (function) that will return true if its a valid single integer or floating number or false if its not.



*/

function isDigit(s) {
  return (s ? !NaN(s) : NaN(s))
  if(isNaN(s)){
    return false
  }else{
    return true
  }
}
console.log(isDigit("2-4"))


/*
parameter: a string

return: the first string in the array with *** between each letter

examples of true:
isDigit("3")
isDigit("  3  ")
isDigit("-3.23")

examples of false:
isDigit("3-4")
isDigit("  3   5")
isDigit("3 5")
isDigit("zero")

pseudocode:
sort the array in alphabetical order
return the first array[0] with *** inserted between each letter
use split("***")

*/
