String.prototype.toAlternatingCase = function () {
    let newStr = ""
    
    for(let i = 0; i< this.length; i++){
       if(this[i] !== this[i].toLowerCase()){
              newStr = newStr + this[i].toLowerCase()
          }else{
              newStr = newStr + this[i].toUpperCase()
          }
    } return newStr
  }