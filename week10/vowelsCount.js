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
parameter = a string that consist of only lower case letters/spaces

return the count of vowels in string

example
"aaabcdeaaa" -> 7 

pseudocode:

create a variable that holds the count
create an array of vowels
for loop that checks if the character is in the vowels list
conditional that increments the vowel count if it does
return the vowelCount


*/