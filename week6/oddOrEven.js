//https://www.codewars.com/kata/5949481f86420f59480000e7

function oddOrEven(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        console.log(sum += array[i]);
    }
    if (sum % 2 === 0 || sum === 0) {
        console.log("even")
    } else {
        console.log("odd")
    }
}