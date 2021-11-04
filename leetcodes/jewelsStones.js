/*
You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

Letters are case sensitive, so "a" is considered a different type of stone from "A".

*/
var numJewelsInStones = function(jewels, stones) {
    let numOfJewels = 0
   
    stones.split('').forEach(element => {
        jewels.indexOf(element) >= 0 ? numOfJewels++ : numOfJewels
    });
    return numOfJewels
};

console.log(numJewelsInStones("aA", "aAAbbbb"))



/*

parameter: two strings
return: num of jewels that are stones 
example:

Input: jewels = "aA", stones = "aAAbbbb"
Output: 3

Input: jewels = "z", stones = "ZZ"
Output: 0

pseduo code:
variable of num of jewels that are stones
includes method if true ++ if false 


what I googled:



*/