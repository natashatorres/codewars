/*

Create a function strCount (takes an object as argument) that will count all string 
values inside an object. For example:

strCount({
  first: "1",
  second: "2",
  third: false,
  fourth: ["anytime",2,3,4],
  fifth:  null
  })
  //returns 3

*/


function strCount(obj){
    let count = 0

    for(let string in obj){
        if(typeof obj[string] === 'string'){
            count += 1
        }

        if(typeof obj[string] === 'object'){
            count += strCount(obj[string])
        }
    }

    return count
}


console.log(strCount({
    first: "1",
    second: "2",
    third: false,
    fourth: ["anytime",2,3,4],
    fifth:  null
    }), 3)
