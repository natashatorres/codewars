/*
You will be given a sequence of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.

Given the following input array:

var list1 = [
  { firstName: 'Maria', lastName: 'Y.', country: 'Cyprus', continent: 'Europe', age: 30, language: 'Java' },
  { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 70, language: 'Python' },
];
write a function that returns the average age of developers (rounded to the nearest integer). In the example above your function should return 50 (number).

*/

function getAverageAge(list) {
    let ageArr = list.map(e => e.age)
    return Math.ceil(ageArr.reduce((a,b) => a + b)/ ageArr.length)
}


console.log(getAverageAge([
    { firstName: 'Maria', lastName: 'Y.', country: 'Cyprus', continent: 'Europe', age: 30, language: 'Java' },
    { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 70, language: 'Python' },
  ]), 50)