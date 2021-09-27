
function lastSurvivor(letters, coords) {
    let arr = letters.split('') 
    for(let i = 0; i < coords.length; i++){
        arr.splice(coords[i], 1)   
    }
    return arr[0]
}
lastSurvivor("zbk", [0, 1])


//parameter 
//a string of letters and an array of numbers
//return 
//the only letter left
//example
//let str = "zbk", arr = [0, 1]
    //str = "bk", arr = [1]
    //str = "b", arr = []
    //return 'b'
//pseudo code:
//loop through the array to remove letters
//within the loop create use a method that removes a letter from the string each time
//return the last letter

//questions to ask:
//i.e. notes
//will the string ever be empty?
//how long will the length of the array be?
//Can it take all numbers?
//Can there be duplicate letters and numbers?

//reflections:
//splice method: method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. T
//things I googled: how to remove a letter from a string , how to turn an str into an array (split method) 
//adding more to the pseudo code, like should I change the array into a string.
