/* https://www.codewars.com/kata/576bb71bbbcf0951d5000044
Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.

If the input array is empty or null, return an empty array.

Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

*/


function countPositivesSumNegatives(input) {
    if( input === null || input.length === 0){
      return []
    } else{
    let pos = input.filter(num => num > 0)
    let neg = input.filter(num => num < 0)
  
    let arr = [pos.length, neg.reduce((sum, current) => sum + current, 0) ]
    return arr
    }
  }
  
  countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15])
  
  



/*

parameter: array of integers

return: return empty array if null or array is empty, return array where first num is count of pos
and second num is negative num added


example:

For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65]

questions:
will there ever be floats?
will there ever be empty arrays?
will anything other than an array be passed through?


pseudocode

check if input is null or empty
create pos and neg variables
fiter through array to find positive nums
filter through array to find neg nums

return pos array.length to get num, and use reduce to find the neg array sum
*/
