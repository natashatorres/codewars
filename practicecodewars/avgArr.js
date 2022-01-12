/*

//Returnn the avergae of the given array rounnded down to its nearest intger

*/

function findAvg(arr){
    return Math.floor(arr.reduce((a, b) => a + b) / arr.length)
}

console.log(findAvg([2, 2, 2, 2]), 2)
console.log(findAvg([1, 2, 3, 4, 5]), 3)
console.log(findAvg([1, 1, 1, 1, 1, 1, 1, 2]), 1)
//rounded downn

/*
parameter/return: arr -> rounded down int
I can always assume there will be some value 
Will there always be numbers in the array?
Will they every be whole? decimal? negative?

pseudocode:
//sum -> divided by the total num of values -> round down

*/

