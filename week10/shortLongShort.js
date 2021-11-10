/*
Given 2 strings, a and b, return a string of the 
form short+long+short, with the shorter string on 
the outside and the longer string on the inside. 
The strings will not be the same length, but they 
may be empty ( zero length ).

*/


function solution(a, b){
    if(a.length > b.length){
        return b + a + b
    }else{
        return a + b + a
    }
  }
  console.log(solution("22", ""))



/*
parameter: two strings 

return: one string with short string on the the outside and long string insde

example
"1" "22" -> "1221"


pseduocode




*/