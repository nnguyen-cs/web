const course = {
    cName: 'cs 2250',
    duration: 75,
    'section': 3,
}

console.log(course.cName); // cs 2250
console.log(course['cName']); // cs 2250


// for... in
for(const key in course){
    console.log(course[key]);
}

const numbers = [11, 12, 13, 14];
for(const idx in numbers){
    console.log(`${idx}. ${numbers[idx]}`);
}
console.log("-------");

for(const number of numbers){
    console.log(number);
}