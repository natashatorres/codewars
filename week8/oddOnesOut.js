/*
Challenge: You are given a list of numbers. The numbers each repeat a certain number of times. Remove all numbers that repeat an odd number of times while keeping everything else the same.


oddOnesOut([1, 2, 3, 1, 3, 3]) = [1, 1]
*/

function oddOnesOut(nums) {
    let occurances = {}
    let evenArr = []

    for(let i = 0; i < nums.length; i++){
        if (nums[i] in occurances){
            occurances[nums[i]] += 1
        }else{
            occurances[nums[i]] = 1
        }
    }
    for(let key in occurances){
              
        if(occurances[key] % 2 === 0){
            evenArr.push(Number(key))
        }
    }
    let result = nums.filter(item => evenArr.includes(item))    
    
    return result
}

oddOnesOut([1, 2, 2, 3, 1, 3, 3])

/*

parameter: an array of numbers

return:  return numbers that only repeat and even amount of times

example: 
oddOnesOut([1, 2, 3, 1, 3, 3]) = [1, 1]
oddOnesOut([1, 1, 3, 3]) = [1, 1, 3, 3]
oddOnesOut([1, 1, 2, 2, 3, 3, 3]) = [1, 1, 2, 2]
oddOnesOut([26, 23, 24, 17, 23, 24, 23, 26]) = [26, 24, 24, 26]
oddOnesOut([1, 2, 3]) = []
oddOnesOut([1]) = []

pseudocode:
create an object that stores the occurances of each number
oddOnesOut([1, 2, 3, 1, 3, 3]) = [1, 1]
1: 2 | 2: 1 | 3: 3
finding how many times a number occurs in the array

for loop: loop through array and send information to the object 
for every element:

Step 1: determine what number it is and record in the object
if they key doesn't exist the value set to 1 | if key does exist +1
occurances = {
    1: 2,
    2: 1,
    3: 3
}

a conditional statement that determines whether the value occurs an even or odd amount of times
if odd the key is deleted from the array

*/

