/*

Write a function that doubles every second integer in a list, starting from the left.

*/

function doubleEveryOther(a) {

    //map through an array, grab the odd indexs and double them
    return a.map(e => e % 2 !== 0 ? e : e * 2)
    return a;
}



console.log(doubleEveryOther([1,2,3,4]), [1,4,3,8])



