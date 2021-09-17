//https://www.codewars.com/kata/5866fc43395d9138a7000006

function ensureQuestion(s) {
    if(s.endsWith('?')){
      return s
    }else{
      return s.concat('?')
    }
 }

