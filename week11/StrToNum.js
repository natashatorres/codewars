/*

Some really funny web dev gave you a sequence of numbers from his API response as an sequence of strings!

You need to cast the whole array to the correct type.

Create the function that takes as a parameter a sequence of numbers represented as strings and outputs a sequence of numbers.



*/

function stringToArry(stringArr){

    //loop through the array of num in strings -> change each string to num -> return the array of num 
    return stringArr.map(e => Number(e))
}

console.log(stringToArry(["1", "2", "3"]), [1, 2, 3])
console.log(stringToArry(["1.1", "2.2", "3.3"]), [1.1, 2.2, 3.3])

//not whole numbers, but things like decimal num might be present
//the array will never be empty
