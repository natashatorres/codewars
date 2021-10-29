/*

I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. I'll appreciate for your help.

P.S. Each array includes only integer numbers. Output is a number too

*/

function arrayPlusArray(arr1, arr2) {
     return arr1.concat(arr2).reduce((pV, cV) => cV + pV)
  }
  console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]))
  
  
/*
parameter: two arrays
  
return: sum of the elements in each array
  
examples:
[1, 2, 3], [4, 5, 6]) -> 21
[-1, -2, -3], [-4, -5, -6]) -> -21
[0, 0, 0], [4, 5, 6]) -> 15
  
pseudocode:
1. combine arrays with concat method
2. reduce arrays 
  */
  