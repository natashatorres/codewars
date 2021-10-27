/*
Write function which will create a string from a list of strings, separated by space.

Example:

["hello", "world"] -> "hello world"
*/


function wordsToSentence(words) {
    return words.join(' ').toString();
  }

/*

parameter: an array of strings

return:  return list of strings seperated by space

example: 
["hello", "world"] ---> hello world
["hi", "my", "name", "is", "tash"] ---> "hi my name is tash"



questions:
will the array always be full of strings?


pseudocode
method to combine the array and get rid of commas and add a space (join)
method to convert array into string
*/

