/*
https://www.codewars.com/kata/54c27a33fb7da0db0100040e
Given an integral number, determine if it's a square number:

In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.

The tests will always use some integral number, so don't worry about that in dynamic typed languages.

Examples
-1  =>  false
 0  =>  true
 3  =>  false
 4  =>  true
25  =>  true
26  =>  false


*/

var isSquare = function (n){
    return Number.isInteger(Math.sqrt(n))
}


/*
parameter: an integer

return: return true of false if the integer is a square number

example: 

Examples
-1  =>  false
 0  =>  true
 3  =>  false
 4  =>  true
25  =>  true
26  =>  false

questions:
will there ever be negative numbers?

pseudocode

a for loop 
*/

