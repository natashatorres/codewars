function largestPairSum (numbers) {
 let orderedNums = numbers.sort((a, b) => a - b)
 let max1 = orderedNums.splice(orderedNums.length - 1)
 let max2 = orderedNums.splice(orderedNums.length - 1)
 let maxnums = max1.concat(max2)

 return maxnums.reduce((a, b) => a + b)


}

console.log(largestPairSum([10, 14, 2, 23, 19], 42))
// console.log(largestPairSum([99, 2, 2, 23, 19], 122))