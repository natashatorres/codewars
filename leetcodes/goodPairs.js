/*

Given an array of integers nums, return the number of good pairs.

A pair (i, j) is called good if nums[i] == nums[j] and i < j.

*/

var numIdenticalPairs = function(nums) {
    let pairs = 0
    for(let i = 0; i < nums.length; i++){
        for(let j = i + 1; j < nums.length; j++){
            if(nums[i] == nums[j]){
                pairs++
            }
        }
    }
    return pairs
};

console.log(numIdenticalPairs([1, 2, 3, 1, 1, 3]))
/*

parameter: an array of integers
return: return numbers that are equal to i === j or i < j
example:
pseduo code:
nested for loops with a conditonal that compares i & j
what I googled:

*/