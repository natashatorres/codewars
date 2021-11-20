/*

You are given two sorted arrays that both only contain integers. Your task is to find a way to merge them into a single one, sorted in asc order. Complete the function mergeArrays(arr1, arr2), where arr1 and arr2 are the original sorted arrays.

You don't need to worry about validation, since arr1 and arr2 must be arrays with 0 or more Integers. If both arr1 and arr2 are empty, then just return an empty array.

Note: arr1 and arr2 may be sorted in different orders. Also arr1 and arr2 may have same integers. Remove duplicated in the returned result.


*/

function mergeArr(arr1, arr2){
    //combine both arrs -> remove duplicates within the array -> sort the array in order -> return sorted array
    let mergedArr = arr1.concat(arr2)
    let uniqueArr = [...new Set(mergedArr)]
    return uniqueArr.sort((a, b) => a - b)
}

//will the arrays ever be empty? ever include anything other than whole positive nums? are the arrays in order? 
//yes arrays could be empty, return = []
console.log(mergeArr([1, 2, 3 ,4], [10, 10, 5, 6]), [1, 2, 3, 4, 5, 6, 10])
console.log(mergeArr([1, 3, 5], [10, 8, 2]), [1, 2, 3, 5, 8, 10])