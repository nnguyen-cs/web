const numbers = [1, 1, 2, 2];
const total = numbers.reduce((acc, currVal) => {
    console.log(`acc = ${acc} | currVal = ${currVal}`);
    
    return acc + currVal;
}, 0);

console.log(total);

// let accumulator = 0;
// for(let currentValue of numbers){
//     accumulator += currentValue;
// }
// console.log(accumulator);

const array = [[100, 2], [3, 4]];

const flatArray = array.reduce((acc, curr) => {
    // your logic goes to here!
    for(let value of curr){
        acc.push(value);
    }
    return acc;
}, []);

console.log(flatArray); // [100, 2, 3, 4];

const students = [
    {name: 'Alex', age: 21},
    {name: 'Sam', age: 18},
    {name: 'Siri', age: 21},
]
const groupStudentsByAage = students.reduce( (acc, student) => {
    
    if(acc[student.age]){
        acc[student.age].push(student);
    } else{
        acc[student.age] = [student];
    }
    return acc;
}, {});

console.log(groupStudentsByAage);


