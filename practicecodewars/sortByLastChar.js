/*

Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.

If two words have the same last letter, they returned array should show them in the order they appeared in the given string.

All inputs will be valid.


*/

function last(x){
    let list = x.split(" ")
    return list.sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1));
}

console.log(last('man i need a taxi up to ubud'))


/*

Parameter: a string of words

Return: array of words sorted by last character alaphabetically
if words end in same letter return same order

Example:
'man i need a taxi up to ubud' -> ['a', 'need', 'ubud', 'i', 'taxi', 'man', 'to', 'up']

Pseudocode:

split string 
reverse it
sort
resverse it and return


*/