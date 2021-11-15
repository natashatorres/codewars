function twoOldestAges(ages){
    let sortedArr = ages.sort((a, b) => a - b)
    return sortedArr.slice(-2)
    console.log(sortedArr)
    //arr of num -> sort the arr low to high -> grab the last two elements
    
  }
  
  
  /*
  will it ever be empty?
  will it ever other than num?
  will there ever duplicates, and how should those be returned?
  */