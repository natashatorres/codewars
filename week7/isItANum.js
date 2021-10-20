/*

https://www.codewars.com/kata/57126304cdbf63c6770012bd

Given a string s, write a method (function) that will return true if its a valid 
single integer or floating number or false if its not.

Valid examples, should return true:
isDigit("3")
isDigit("  3  ")
isDigit("-3.23")

should return false:
isDigit("3-4")
isDigit("  3   5")
isDigit("3 5")
isDigit("zero")

*/

function isDigit(s) {
    str = String(s).trim();
    if(!str ? NaN : Number(str)){
      return true
    }
    return false
  }


/*

parameter: a string

return: true if its a valid single integer or floating number

example:

return true:
isDigit("3")
isDigit("  3  ")
isDigit("-3.23")

should return false:
isDigit("3-4")
isDigit("  3   5")
isDigit("3 5")
isDigit("zero")

questions:
will there ever be negative integers?
will there ever be floats?
will there ever be words?
will there ever be multiple numbers in the string?

pseudocode/research

check if x is an integer
check if x is a float

if they are return true
if they aren't return false
*/
