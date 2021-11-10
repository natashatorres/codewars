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


console.log(twoHighest([15, 20, 20, 17]))