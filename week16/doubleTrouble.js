/*

Given an array of integers (x), and a target (t), you must find out if any two consecutive numbers in the 
array sum to t. If so, remove the second number.

Example:

x = [1, 2, 3, 4, 5]
t = 3

1+2 = t, so remove 2. No other pairs = t, so rest of array remains:

[1, 3, 4, 5]

Work through the array from left to right.

Return the resulting array.


*/

function trouble(x, t){
    
    for(let i = 0; i < x.length -1; i++){
        while(x[i] + x[i + 1] === t){
            x.splice(i + 1, 1)
        }
    }

    return x

    // for(let i = 0; i < x.length - 1; i++){
    //     console.log(i, x[i], x[i + 1])
    //     if(x[i] + x[i + 1] === t){
    //         console.log("remove", x[i + 1])
    //         x.splice(i + 1, 1);
    //         console.log("new array is", x)
    //         i--;
    //     }
    // }
    // return x
 
}


// console.log(trouble([1, 3, 5, 6, 7, 4, 3],7), [1, 3, 5, 6, 7, 4])
console.log(trouble([4, 1, 1, 1, 4],2), [4, 1, 4])
// console.log(trouble([2, 2, 2, 2, 2, 2], 4))
// console.log(trouble([2, 6, 2], 8))





// i              n1 n2      i1 i2
// 0              1, 3       0   1
// 1              3, 5       1,  2
// 2              5, 6       2,  3