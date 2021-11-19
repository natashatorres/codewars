/*

Given a sequence of numbers, find the largest pair sum in the sequence.



*/


function largestPairSum(numbers){
    //sort the array from smallest to large -> grab the last two elements -> add the last two highest nums
    let sortedArr = numbers.sort((a, b) => a - b).splice(-2, 2)
    return sortedArr.reduce((a, b) => a + b)
}


console.log(largestPairSum([10, 14, 2, 23, 19]), 42)
console.log(largestPairSum([99, 2, 2, 23, 19]), 122)