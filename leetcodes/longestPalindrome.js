var longestPalindrome = function(s) {
    let string = s.split('')
    return string.concat(string)
};

console.log(longestPalindrome("A man, a plan, a canal: Panama"))