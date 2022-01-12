function breakCamelCase(str){
//put a space before capital letter
//find capital letter
//split individual letters
//map if cap return space + cap and then join
return str.split('').map(l => l === l.toUpperCase() ? ' ' + l : l).join('')
}


console.log(breakCamelCase('camelCasing'), 'camel Casing')
console.log(breakCamelCase('identifier'), 'indentifier')
console.log(breakCamelCase('helloNatashaHowAreYou'), 'hello Natasha How Are You')
