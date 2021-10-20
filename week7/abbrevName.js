/*
https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3


Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F
*/

function abbrevName(name){
    let str = name.toUpperCase().split(' ')
    let word1 = str[0]
    let word2 = str[1]
    return (word1[0] + "." + word2[0])
  
  }

  abbrevName()
  



/*

parameter: a string with first and last name

return: returns a string with first letter of each name with a dot inbetween

example:

patrick feeney => P.F

questions:
does it only take in string?
will there ever be an empty string?
will it always be two words?
is the string case sensitve?
will the return initials always be capitalized?

pseudocode

change str to uppercase
split the words 
create variables to hold the new words
return the first letters of each word 
*/
