/*

Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:

I love you
a little
a lot
passionately
madly
not at all
When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.

Your goal in this kata is to determine which phrase the girls would say for a flower of a given number of petals, where nb_petals > 0.


*/

function howMuchILoveYou(nbPetals){
    let phrase = ["I love you", "a little", "a lot", "passionately", "madly", "not at all"]
    for(let i = 0; i <= nbPetals; i++){
        phrase.push(phrase[i])
    }
    return phrase[nbPetals - 1]
}

console.log(howMuchILoveYou(6), "not at all")



/*
parameter: number

will it ever be empty?
will there ever anything other than a number passed through?
will it be a whole number?

return: the petal the num pics

example:
(7) -> I love you
(6) -> not at all
(12) -> not at all

pseudocode:

create an array with phrases
loop through phrases and add each phrase to the original array correlated to the num of petals
return phrase using by targeting index which will be (num petals - 1)



*/