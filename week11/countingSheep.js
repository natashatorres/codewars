/*

Consider an array/list of sheep where some sheep may be missing from their place. 
We need a function that counts the number of sheep present in the array (true means present).

*/



function countSheeps(arrayOfSheep) {
    let sheep = arrayOfSheep.filter(e => e == true)
    let count = sheep.length

    return count
    //filter through the array, count the numer of true through .length, and return that number

}

console.log(countSheeps(
    [true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true], 17))
console.log(countSheeps(
    [true, true, true, false], 3))
console.log(countSheeps(
    [false, false, false, false], 0))


/*




*/