/*

Write a function, gooseFilter / goose-filter / goose_filter / GooseFilter, that takes an array of strings as an argument and returns a filtered array containing the same elements but with the 'geese' removed.

The geese are any strings in the following array, which is pre-populated in your solution:


*/


function gooseFilter (birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    return birds.filter(e => !geese.includes(e))
  };



/*
parameter: an array of strings

will it ever take anything other than an strings?
will the array ever be empty? 

return: an array of the same elements without the elements listed in the geese list


example:
["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]
-> ["Mallard", "Hook Bill", "Crested", "Blue Swedish"]

pseudo code:
you want to filter through the birds array
check if any of the elements in the birds array match the elements in the geese array
if they don't match, return them to a new array

use filter method
filter method allows you to filter through each element
use includes method
to see if the birds element is not in the array
!geese.includes(bird)
if it isn't it will be returned



*/