/*

This function should take two string parameters: a person's name (name) and a quote of theirs (quote), and return a string attributing the quote to the person in the following format:

'[name] said: "[quote]"'
For example, if name is 'Grae' and 'quote' is 'Practice makes perfect' then your function should return the string




*/

function quotable(name, quote){
    return `${name.charAt(0).toUpperCase() + name.slice(1)} said: "${quote}"`
}

console.log(quotable('grae', "see you soon"))

/*
parameter: two strings
return a string 'name said: "quote"'
example
'Grae said: "Practice makes perfect"'

pseudocode:
return a string make first name letter capital
*/