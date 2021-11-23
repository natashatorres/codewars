/*

Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

Examples: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" spinWords( "This is a test") => returns "This is a test" spinWords( "This is another test" )=> returns "This is rehtona test"

*/


function spinWords(str){
    //variable turn the string that's passed through into a array
    let strArray = str.split(' ')
    //create an variable that holds an empty string
    let newStr = ""
    //loop that allows to check if a string contains words that more 5 characters
    for(i = 0; i <= strArray.length; i++){
      if(strArray[i].length > 5){
        let reversedWord = strArray[i].split('').reverse().join('')
        console.log(reversedWord)
        newStr + reversedWord
      }else{
        newStr + strArray[i]
      }
      return newStr
    }
    //a conditional checks if word 5 characters
    //split and reversed and join 
    //else push string to empty variable that holds an empty string
    }
    
    console.log(spinWords("Hey Catarina how are you"), "Hey aniratac how are you")
    console.log(spinWords("This is another test"), "This is rehtona test")