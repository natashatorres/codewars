function tripleTrouble(one, two, three){
    let combinedStr = ""
    
    for(let i = 0; i < one.length; i++){
      combinedStr += one[i] + two[i] + three[i]
    }
    
    return combinedStr
   }