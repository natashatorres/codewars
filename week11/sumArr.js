/*

Write a function that takes an array of numbers and returns the sum of the numbers. 
The numbers can be negative or non-integer. 
If the array does not contain any numbers then you should return 0.

*/



function sumArr(arr){

    return arr.reduce((a, b) => a + b, 0)
}

/*

array that includes a numeric data type (decimals, negative numbers, and whole numbers)
array may have other things passed through but you have to return zero if it does
will it include strings? booleans? null? No.


*/

console.log(sumArr([1.5, 2,]), 4.5)
console.log(sumArr([1, 5.2, 4, 0, -1]), 9.2)
console.log(sumArr([]), 0)