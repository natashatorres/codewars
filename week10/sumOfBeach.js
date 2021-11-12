/*

Beaches are filled with sand, water, fish, and sun. 
Given a string, calculate how many times the words 
"Sand", "Water", "Fish", and "Sun" appear without overlapping 
(regardless of the case).

*/

let words = ["Sand", "Water", "Fish", "Sun"]
function count(word, beach) {
  let c = 0
  let startOfWord = 0
  let endOfWord = 0
  while (startOfWord !== -1) {
    startOfWord = beach.indexOf(word, endOfWord)
    if (startOfWord !== -1) {
      c++
      endOfWord = startOfWord + word.length
    }

  }

  return c
  //c = 0 (count variable)
  //i = 0
  //look for word inside beach starting at position i 
  //if you find it, add 1 to c and set i to end of word
  //repeat until no word is found

}


function sumOfABeach(beach) {
  beach = beach.toLowerCase()
  let result = 0
  words.forEach(word => {
    word = word.toLowerCase()
    result += count(word, beach)
  })
  return result
}

console.log(sumOfABeach("WAtErSlIde"))
console.log(sumOfABeach("GolDeNSanDyWateRyBeaChSuNN"))

/*

parameter: string

is it case sensitive?
is it one word?
will there every anything other than letters? any punctuation?




return: count of how many times a word appears in a string

example:

sumOfABeach("WAtErSlIde")                    ==>  1
sumOfABeach("GolDeNSanDyWateRyBeaChSuNN")    ==>  3
sumOfABeach("gOfIshsunesunFiSh")             ==>  4
sumOfABeach("cItYTowNcARShoW")               ==>  0

pseduocode:

turn the string into lowercase
while loop
indexOf - gives you the position of the word,


*/