/*
In this Kata, you will be given a string that may have mixed uppercase and 
lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:

make as few changes as possible.
if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.


*/
function solve(s){
    let upper = 0
    let lower = 0

    for(let i = 0; i < s.length; i++){
        if(s[i] >= "A" && s[i] <= "Z"){
            upper++
        }else if(s[i] >= "a" && s[i] <= "z"){
            lower++
        }
    }
    // if(upper === lower){
    //     return s.toLowerCase()
    // }else if(upper < lower){
    //     return s.toLowerCase()
    // }else{
    //     return s.toUpperCase()
    // }
    //best practice:
    return lower >= upper ? s.toLowerCase() : s.toUpperCase()
}

console.log(solve('DeMo'))

/*
parameter: string that has mixed uppercase and lowercase letters 

return: return string either in uppercase or lowercase 

example: 
solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
solve("CODe") = "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.
solve("coDE") = "code". Upper == lowercase. Change all to lowercase.



questions:
will the array contain anything other than strings of words?

pseudocode
count how many lowercase letters, count how many uppercase letters
create variables 
lower
upper

create conditional that states:
    if lowercase < uppercase return s.toUpperCase()
    if lowercase > uppercase return s.toLowerCase()
    if lowercase === uppercase return s.toLowerCase()
*/