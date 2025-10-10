/**
 * 

const variableName = condition ? value1 : value2

const variableName = value1 // if condition is true
const variableName = value2 // if condition is false
 */
let test1 = 70;
let test2 = 79;
const hasPassedTest = (test1 >= 70 && test2 >= 70) ? "Yes" : "No";

const hasPassedTest2= (test1 + test2 >= 140) ? "Yes" : "No";
console.log(`has passed test? ${hasPassedTest}`);

