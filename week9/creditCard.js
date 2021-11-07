/*

Usually when you buy something, 
you're asked whether your credit card number, phone number or answer to 
your most secret question is still correct. However, since someone could 
look over your shoulder, you don't want that shown on your screen. 
Instead, we mask it.

Your task is to write a function maskify, 
which changes all but the last four characters into '#'.


*/

function maskify(cc) {
    let strArr = cc.split("")
    console.log(strArr)
    for(let i = 0; i < strArr.length -4; i++){
        strArr[i] = "#"
    }
  
    return strArr.join("")
}

console.log(maskify('4556364607935616'))
/*


parameter: a string of characters

return: a string that masks all but the last four charcters of the string with #

example:
maskify("4556364607935616") == "############5616"
maskify(     "64607935616") ==      "#######5616"
maskify(               "1") ==                "1"
maskify(                "") ==                 ""
maskify("Skippy")                                   == "##ippy"
maskify("Nananananananananananananananana Batman!") == "####################################man!"

pseudocode:
reverse the string so it doesnt have to go through the whole array
replace characters except the last four digits with #
possible methods?
for loop? that stops at the 4th character 
replace(character, #)
or see if a string has more than 4 characters
if it does do this
if not return str


questions to ask:
will the string ever include letters or anything other than numbers?
Are the numbers whole? Negative?
Will the string ever be empty?
Will the string ever have less than 4 characters?

*/