function twoHighest(arr) {
    let sorted = arr.sort(function (a, b) { return b - a })
    let uniqueItems = [...new Set(sorted)]
    return uniqueItems.slice(0, 2)
    // if (sorted[0] === sorted[1]) {
    //     sorted.shift(0)
    //     return sorted.slice(0, 2)
    // } else {
    //     return sorted.slice(0, 2)
    // }
}

//let sorted = arr.sort(function(a, b){return a - b});
//   const highestNum = sorted.slice(-2)
//   if(highestNum.length === 2 && highestNum[0] === highestNum[1]){
//       return highestNum[0]
//   }


console.log(twoHighest([15, 20, 20, 17]))