/*

https://www.codewars.com/kata/5a431c0de1ce0ec33a00000c/train/javascript

Given an array of digitals numbers, return a new array of length number containing the last even numbers from the original array (in the same order). The original array will be not empty and will contain at least "number" even numbers.

For example:
*/



function evenNumbers(array, number) {
    //for loop iterate through array -> a conditional statement for even numbers 
    let newArr = array.filter(num => num % 2 === 0)
    return newArr.slice(-number)
    
    
    // let evenArr = []
  //   for(let i = 0; i < array.length; i++){
  //     if(array[i] % 2 ===0){
  //       evenArr = evenArr + array[i]
  //     }
  //   }
  //   console.log(evenArr.split(''))
  //   return evenArr.split('').slice(-1, number)
    
  }
  
  //evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3), [4, 6, 8]
  //evenNumbers([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2), [-8, 26]