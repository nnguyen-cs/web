const numbers = [12, 13, 14, 15, 16];

/**
 * index = 3
 * numbers[3] = 15
 */
for (let index = 0; index < numbers.length; index++) {
    if(numbers[index] === 13){
        continue;
    }
    console.log(numbers[index]);
}