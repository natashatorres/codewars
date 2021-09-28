//https://www.codewars.com/kata/57e3f79c9cb119374600046b

function hello(name) {
    const index = 0
    if(name){
        return 'Hello, ' + name.charAt(0).toUpperCase() + name.slice(1).toLowerCase() + "!"
    }else{
        return "Hello, World!"
    }
}

hello()



//parameter: name (which can be a string)
//return: "Hello, Name!" or "Hello, World!"
//example:hello "john"   => "Hello, John!"
//hello "aliCE"  => "Hello, Alice!"
//hello          => "Hello, World!" # name not given
//hello ""       => "Hello, World!" # name is an empty String
//Pseudo code: 
//if statement that returns hello + name else hello world
//include a method that makes sure the first letter is capitalized and the rest of the string is lower case
//What I googled
//how to capitalize the first word in a string

//Reflections:
//I first approached it like I needed to create conditions for when the string was empty and null, but kept getting false in the console.
//I need to revisit conditional statements. 