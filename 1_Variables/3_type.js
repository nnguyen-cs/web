// 1. string
let fname = 'Bronco';
let lname = "CPP";
let fullName = `${fname} ${lname}`;
console.log(typeof fname);


// 2. number
let evenNumber = 10;
let pi = 3.14;
console.log(typeof pi);

// 3. boolean
let hasTicket = true;
let passExam = false;
console.log(typeof passExam);

// 4. undefined
let index;
console.log(typeof index);

// 5. null
let idx = null;
console.log(typeof idx);
// 6. symbol
const secretKey = Symbol();

// ----- Object -----
let userCustomizedChoice = "customized username"
let cppCourse = {
    name: 'CS 2250',
    'hours': 3,
    semester: 2025,
    'school name': "Cal Poly Pomona",
    [userCustomizedChoice]: "User name",
}
// access object's keys'a value
console.log(cppCourse.name);
console.log(cppCourse['hours']);
console.log(cppCourse["school name"]);
console.log(cppCourse[userCustomizedChoice]);

// modify the key's value
cppCourse.name = 'Web Developement';
cppCourse["school name"] = "CPP";

// adding new key-valu pair
cppCourse['location'] = "Pomona, CA";
cppCourse['Location'] = "CA, USA";
console.log(cppCourse);

// delete a key-value pair
delete cppCourse['Location'];
console.log(cppCourse);




