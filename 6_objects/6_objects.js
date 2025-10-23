const student = {
    name: 'Kayla',
    major: 'Computer Engineering',

    schedule: {
        morning: "CS 2250",
        evening: "CS 3310",
    }

}

// destructred assignments
const {name} = student;
console.log(name);

console.log(student.schedule.moring);

const {morning} = student.schedule;
console.log(morning);
 