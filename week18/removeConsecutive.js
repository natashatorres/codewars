/*
Your task is to remove all consecutive duplicate words from a string, 
leaving only first words entries. For example:
*/

const removeConsecutiveDuplicates = s => { 
let words = s.split(' ')
}
console.log(removeConsecutiveDuplicates("alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"), "alpha beta gamma delta alpha beta gamma delta")


/*
Parameters => always going to get a string of words might oontains duplicates
Example => "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta" --> "alpha beta gamma delta alpha beta gamma delta"
Return => a string with no duplicate words
Pseduo =>
string => change string to array => find any duplicates => remove any duplicates => turn array into string return the org/new string contains only unique words


*/