/*
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.


*/

function countVowels(str){
    let vowelCount = 0
    let vowels = ['a', 'e', 'i', 'o', 'u']
    for(let i = 0; i < str.length; i++){
        console.log(str[i])
        if(vowels.includes(str[i])){
            vowelCount++
        }
    }
    return vowelCount
}

console.log(countVowels("aaaeeebcd"))


/*

parameter:
return:
example:
pseduocode:


*/