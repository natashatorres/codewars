//https://www.codewars.com/kata/55f2b110f61eb01779000053

function getSum(a, b) {
    let sum = 0
    let firstNum = a > b ? b : a
    let secondNum = a > b ? a : b
    if (a === b) {
        return a;
    }else{
        for(let i = firstNum; i <=secondNum; i++){
            return sum += i
        }
    }
}


/*
parameter: two integers
going to have to order a & b
return: the sum of all the integers between them & them or return a or b
example: (1, 0) --> 1 (1 + 0 = 1)
pseduo code:

a conditional that says if a is equal to b return a
a conditional if a < b return a + 

what I googled:
how to compare the integers between two num
*/