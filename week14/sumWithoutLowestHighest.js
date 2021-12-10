function sumArray(array) {
    let sortedArr = array.sort((a, b) => a - b)
        sortedArr.pop()
        sortedArr.shift()
        return sortedArr.reduce((acc, element) => acc + element)
}