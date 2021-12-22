/*
Given a string, turn each character into its ASCII character code and join them together to create a number - 
let's call this number total1:

'ABC' --> 'A' = 65, 'B' = 66, 'C' = 67 --> 656667
Then replace any incidence of the number 7 with the number 1, and call this number 'total2':

total1 = 656667
              ^
total2 = 656661
              ^
Then return the difference between the sum of the digits in total1 and total2:

  (6 + 5 + 6 + 6 + 6 + 7)
- (6 + 5 + 6 + 6 + 6 + 1)
-------------------------
                       6

*/

function calc(x){
    let total1 = []
    let total2 = []
    
    //split the string, find the ASCII character code for each letter, put that into an array and join the array into a single number assign that to total1
    total1 = x.split('').map(e => e.charCodeAt(0)).join('')
    //take total1 replace any 7 with 1
    total2 = total1.includes(7) ? total1.replaceAll(7, 1) : total1

    return total1.split('').map(e => parseInt(e)).reduce((p, c) => p + c) - total2.split('').map(e2 => parseInt(e2)).reduce((p2, c2) => p2 + c2)
}


console.log(calc('abcdef'), 6);
console.log(calc('ifkhchlhfd'), 6); 
console.log(calc('aaaaaddddr'), 30); 
console.log(calc('jfmgklf8hglbe'), 6);  
console.log(calc('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'), 96);
