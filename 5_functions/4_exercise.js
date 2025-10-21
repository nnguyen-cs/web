/*
write a function that accepts a stirng as a parameter
and finds the longest word within the string
*/

function findLongestWord(str){
    textArray = text.split(" ");
    // console.log(textArray);

    let longestWord;
    let longestWordLength = 0;

    for(let word of textArray){
        if(word.length > longestWordLength){
            // console.log(word);
            longestWord = word;
            longestWordLength = word.length;
        }
    }
    return longestWord === undefined ? "string is empty" : longestWord;
}


text = "";


console.log(findLongestWord(text)); // JavaScript