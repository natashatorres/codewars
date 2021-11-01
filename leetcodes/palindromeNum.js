var isPalindrome = function(x) {
    console.log(x.toString().split('').reverse().join(''))
    console.log(x)
    return x.toString() === x.toString().split('').reverse().join('')
    
};

console.log(isPalindrome(121))