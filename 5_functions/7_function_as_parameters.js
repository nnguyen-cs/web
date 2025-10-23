// // function greet(name, callback){
// //     console.log(`Hello, ${name}`);
// //     callback(); // a callback function is a function that is passed to another func as a parameter
// // }

// // function bye(){
// //     console.log("Bye bye!");
// // }

// // greet("CS 2250", bye());

// // asychronous
// setTimeout(() => {
//     console.log("This message will show after 3 seconds");
// }, 3000);

function boilWater(callback){
    console.log("Boiling water now ...");

    setTimeout(()=>{
        console.log("Water is boiled");
        callback();
    }, 4000);
    
}

function cookPasta(){
    console.log("I am cooking my pasta");
}

boilWater(cookPasta);
console.log("Meanwhile, I am chopping some veggies");
