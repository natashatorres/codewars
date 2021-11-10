function charFreq(message) {
    let dictionary = {}
    
    for(let char of message){
      if(dictionary.hasOwnProperty(char)){
        dictionary[char]++
      }else{
        dictionary[char] = 1
      }
    }
    return dictionary
    
  }

  console.log(charFreq('I like cats'))