function addUsername(list) {
//grab the first name turn it to lowercase
//grab the the lastname first index and lowercase it
//get year from list
let year = 
//concat firstname, lastname first index and year

list.forEach(e => e.username = `${e.firstName.toLowerCase()}${e.lastName[0].toLowerCase()} `)
return list

}

console.log(addUsername([
    { firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby' },
    { firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure' }
  ]), [
    { firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby', 
      username: 'emilyn1990' },
    { firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure', 
      username: 'nore2000' }
  ])
  