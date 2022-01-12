/*
Given an array of integers your solution should find the smallest integer.

For example:

Given [34, 15, 88, 2] your solution will return 2
Given [34, -345, -1, 100] your solution will return -345
You can assume, for the purpose of this kata, that the supplied 
array will not be empty.

*/

class SmallestIntegerFinder {
    findSmallestInt(args) {
      let orderList = args.sort((a,b) => a - b)
      return orderList[0]
    }
}

// let SmallestIntegerFinder = new SmallestIntegerFinder();
// SmallestIntegerFinder.findSmallestInt([78,56,232,12,8])




/*
parameter: an array of integers 

questions to ask:
will they ever not be integers?
will there ever be anything other than integers?
will there ever be any duplicate numbers/integers?
will the array ever be empty?


return: the smallest number

example:

[35, 2, 45] -> 2
[45, -125, 20, -2] -> -125

pseduocode:
sort the list from smallest to highest
grab the first index

or 
iterate through the array

*/