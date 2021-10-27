/*
Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.

*/

function findShort(s){
    let strArr = s.split(' ')
    let shortestWord = strArr[0].length
    console.log(strArr[0].length)
  
    for(let i = 0; i < strArr.length; i++){
      if(strArr[i].length < shortestWord){
        shortestWord = strArr[i].length;
      }
    }
    return shortestWord
  }
  
/*

parameter: a string of words

return:  return length of the shortest word(s)

example: 
"hello tash" ---> 4
"goodbye see you soon" ---> 3



questions:
will the string ever be empty?
will the string ever contain numbers?


pseudocode
turn str into an array using split
create a variable that 
*/

