/*
You get an array of numbers, return the sum of all of the positives ones.

Note: if there is nothing to sum, the sum is default to 0.

https://www.codewars.com/kata/5715eaedb436cf5606000381

*/

function positiveSum(arr) {
    let sum = arr.filter(num => num > 0)
    return sum.reduce((sum, current) => sum + current, 0)
}

positiveSum([1, 2, 3, 4, 5])



/*

parameter: an array of numbers

return: return all positive numbers into an array

example:

Example [1,-4,7,12] => 1 + 7 + 12 = 20

questions:
will there ever be negative integers?
will there ever be floats?

pseudocode

filter method to return a new array of positive integers

reduce method to add each item in the array
*/
