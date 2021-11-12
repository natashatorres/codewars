function twoHighest(arr){
    let sorted = arr.sort(function (a, b) {return b -a})
    let uniqueElements = [...new Set(sorted)]
    return uniqueElements.slice(0, 2)
}
console.log(twoHighest([12, 20, 20, 17]))
