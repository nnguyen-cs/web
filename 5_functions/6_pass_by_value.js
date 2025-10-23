let number = 10;

console.log(`2. numbers = ${number}`);


function powerTwo(number){
    number = number ** 2;
    console.log(`INSIDE THE FUNCTION: number = ${number}`);
}

powerTwo(number);
console.log(`2. numbers = ${number}`);


// pass by references
const data = {one: 1, two: 2};
console.log(data);


function addNewItem(data){
    data["three"] = 3;
}

addNewItem(data);
console.log(data);
            



