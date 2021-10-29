/*

You will be given a vector of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

The returned value must be a string, and have "***" between each of its letters.

You should not remove or add elements from/to the array.
*/


// function twoSort(s) {
//     let sortedArr = s.sort();
//     let splitWord = sortedArr[0].toString().split("");
//     console.log(splitWord)
//     let result = splitWord.reduce((r, a) => r.concat(a, "***"), [0]).slice(1, -1)
//     return result.join("")
//     // return result.substring(0, result.length - 3)
    
/* or */   
//   }
  function twoSort(s) {
    return s.sort()[0].split('').join('***')
  }


console.log(twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]))

/*
parameter: an array of strings

return: the first string in the array with *** between each letter

example: 
["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]) -> 'b***i***t***c***o***i***n'
["turns", "out", "random", "test", "cases", "are", "easier", "than", "writing", "out", "basic", "ones"]) -> 'a***r***e'


pseudocode:
sort the array in alphabetical order
return the first array[0] with *** inserted between each letter
use split("***")

*/

