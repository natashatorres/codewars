/*

Your task is to make a program takes in a sentence (without puncuation), 
adds all words to a list and returns the sentence as a string which is 
the positions of the word in the list. Casing should not matter too.


*/

function compress(sentence) {
  let strPos = []
  let senArr = sentence.split(' ')
  console.log(senArr)
  for(let i = 0; i < senArr.length; i++){
    if(strPos === senArr[i]){

    }
    strPos += senArr.indexOf(senArr[i], 0)
  }

  return strPos 

}

console.log(compress("hello I am well I am nice"))


/*

parameter: a string without puncation

return: a string of words positions

example:

"Ask not what your COUNTRY can do for you ASK WHAT YOU CAN DO FOR YOUR country"

-> "01234567802856734"

pseduocode:

split the words
find a method that finds the num positions of each other
return those nums in a string



*/