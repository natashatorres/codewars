/*
Challenge:

Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.

Example:

Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].

Addendum:

Please, keep in mind, that JavaScript is by default sorting objects alphabetically. For more information, please consult:


*/


function flattenAndSort(array) {
    let newArr = [].concat.apply([], array)
    return newArr.sort((a,b) => a-b)
   
   }



/*

parameter: a multidimensional array with integers

return:  a flattened array with integers sorted from ascending order

example: 
Example:

Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]] ----> [1, 2, 3, 4, 5, 6, 7, 8, 9].
Given [] ----> []
Given [[], [], []] ----> []
Given [[], [1], [], [1]] ----> [1]



questions:
will there ever be floats?
will there ever be anything other than an integer?
will the array ever be empty?

pseudocode
create a new variable 'newArr' that combines the multidimensional array into one
use concat and apply method
concat adds the array's together (takes the multiple arguments, and merges all the arrays (and non-array arguments) into a single arra)
use sort method for numeric values to order the array
*/

