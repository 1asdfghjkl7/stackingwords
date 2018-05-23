let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];
let nextSentence = ["This","exercise","is","making","my","head","hurt"];

let addExcitement = (theWordArray, charInput = "!") => {

    //Add logic in the addExcitement function to the increase the number of exclamation points after every third word.
    //The number of exclamation points (!) will be determined by how many times the counter variable can be divided by 3.


    let buildMeUp = ""
    let char = charInput 

    for (let i = 1; i <= theWordArray.length; i++) {
        if (i % 3 === 0 && i != 0) {
            buildMeUp += `${theWordArray[i-1]}${char} `
            char += `${charInput}`
        }
        else {
            buildMeUp += `${theWordArray[i-1]} `
        }


        console.log(buildMeUp);

    }



}

addExcitement(sentence)
addExcitement(sentence, "?")
addExcitement(nextSentence, ".")