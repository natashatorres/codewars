function largestPairSum (numbers) {
    let sortedArr = numbers.sort((a, b) => a - b).splice(-2, 2)
    return sortedArr.reduce((a, b) => a + b)

}

console.log(largestPairSum([10, 14, 2, 23, 19], 42))
// console.log(largestPairSum([99, 2, 2, 23, 19], 122))