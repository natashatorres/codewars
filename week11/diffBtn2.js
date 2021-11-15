/*

You have an array of non-negative integers. You need to calculate the difference between the 1st biggest number and the 2nd biggest number of the array.

    diffBig2([10, 5, 2]);
In this case, the 1st biggest number is 10 and the 2nd biggest number is 5. So, the function returns 5, the result of 10 - 5.

You can assume that the input array has 2 or more elements.

The input array has the sort method disabled, so you will have to solve it in another way.




*/

function diffBig2(arr) {
  let max = Math.max(...arr)
  arr.splice(arr.indexOf(max), 1)
  let secMax = Math.max(...seconArr)
  return max - secMax

  //arr of num is passed through -> use Math.max to find the highest number in the arr (pu that into a variable)
  //-> remove that max from the array using splice and indexOf -> the array now has the high num removed 
  //-> create another variable that will hold the secMax num and use the Math.max method with spread operator to grab the num
  //-> finally subtract the max from secMax
  
}

/*



*/