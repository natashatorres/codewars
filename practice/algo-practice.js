/* Given a sentence containing two or more words, 
return the equivalent of the sentence when capitalised. E.g
  capSentence('the tales of scotch!') // would return 'The Tales Of Scotch!' */

function capSen(str){
    //loop through the string, grab each word, cap the first letter, reutrn the string

   let strArr = str.split(' ')

   for(let i = 0; i < str.length; i++){
        console.log( str[i].charAt(0).toUpperCase() + str[i].substring(1))
   }
}


console.log(capSen('natasha torres'), "Natasha Torres")
console.log(capSen('hello world how are you'), "Hello World How Are You")