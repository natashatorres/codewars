/*

You should write a function that takes a string 
and a positive integer n, splits the string into 
parts of length n and returns them in an array.
It is ok for the last element to have less than n characters.

If n is not a valid size (> 0) (or is absent), you should return an empty array.

If n is greater than the length of the string, 
you should return an array with the only element 
being the same string.

*/

function stringChunk(str, n) {
    let chunkedArr = []
    if(n === 0 || str === null){
        return chunkedArr
    }else{
    
    str.forEach(e => str.slice(e, e+n))
    for (let i = 0; i < str.length; i += n) {
        let chunk = str.slice(i, i + n)
        chunkedArr.push(chunk)
        }
    }
return chunkedArr
}

console.log(stringChunk("codewars"))


/*

parameter: a string and number to divide the string into arrays

return: an array of subarrays

example
stringChunk('codewars', 2) // ['co', 'de', 'wa', 'rs']
stringChunk('sunny day', 0) // []


pseudocode:
turn string into array with split method
for loop that increments by the number passed through the function
conditional statements


*/