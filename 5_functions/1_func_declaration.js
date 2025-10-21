// 1. function declaration
function saySomething(name="CSS"){
    return `I love ${name}`;
    
}

console.log(saySomething("HTML"));
console.log(saySomething());

// 2. functione expression
const total = function (num1, num2){
    return num1 + num2;
}

console.log(total(10, 40));

