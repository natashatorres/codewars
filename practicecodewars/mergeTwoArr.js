/*


https://www.codewars.com/kata/583af10620dda4da270000c5/train/javascript

Write a function that combines two arrays by alternatingly taking elements from each array in turn.

*/
function mergeTwoArr(arr1, arr2){
  const length = Math.max(arr1.length, arr2.length);
  let result = [];

  for(let i = 0; i < length; i++){
      if(arr1[i] !== undefined){
          result.push(arr1[i])
      }

      if(arr2[i] !==undefined){
          result.push(arr2[i])
      }
  }

  return result

}



console.log(mergeTwoArr(["a", "b", "c"], [1, 2, 3], ["a", 1, "b", 2, "c", 3]))
console.log(mergeTwoArr([1, 2, 3, 4, 5, 6], ["a", "b", "c"], [1, "a", 2, "b", 3, "c", 4, 5, 6]))

/*



*/