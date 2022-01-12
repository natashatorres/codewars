//two strings add them together and sort return single letters

function findLongest(s1, s2){
//no dupe letter -> set -> turn into array ->sort -> join
    return [...new Set(s1+s2)].sort().join('')
}

console.log(findLongest())

//are they all capital letters? 
//will the string be lowercase/uppercase value?

//https://www.codewars.com/kata/5656b6906de340bd1b0000ac/train/javascript