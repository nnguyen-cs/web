// const numbers = [2, 3, 4, 5, 6];

// // 1 add items to the end of the array using push()
// // console.log(numbers);
// numbers.push(10);
// // console.log(numbers);
// numbers.push(11, 12);
// // console.log(numbers);

// // 2 add items to the beginning of the array using unshift()
// numbers.unshift(1);
// // console.log(numbers);
// numbers.unshift(-1, 0);
// // console.log(numbers);

// //3. add items @ the middle of the array using splice()
// // numbers.splice(startIndex, numberItemtoDelete, ItemToAdd, AnotherItemToAdd)
// numbers.splice(3, 0, -10, -20 );
// // console.log(numbers);

// // 4. slice(startIndex, endIndex);
// // console.log(numbers.slice(2, 6));

// const anotherNumbers = numbers.slice();
// console.log(numbers);
// console.log(anotherNumbers);

// anotherNumbers.push(99);
// console.log(numbers);
// console.log(anotherNumbers);



const arr1 = [[1], [2]];
const arr2 = arr1.slice(); // shallow copy
console.log(arr1);
console.log(arr2);

arr2[0].push(100);
console.log(arr1);
console.log(arr2);


