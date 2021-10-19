/* 

https://www.codewars.com/kata/55ecd718f46fba02e5000029

Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

For example:

a = 1
b = 4
--> [1, 2, 3, 4] */

function between(a, b) {
    let intBn = [];
    
    for(let i = a; i <= b; i++){
        intBn.push(i)
     }
    console.log(intBn)
    return intBn
  }

between(1, 4)



/*
parameter: an array of numbers

return: return an array of all integers between the input parameters and the two numbers

example: 

a = 1
b = 4
--> [1, 2, 3, 4]

questions:
will there ever be negative integers?
will there 

pseudocode

a for loop 
*/

