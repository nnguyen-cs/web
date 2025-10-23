// const student = {
//     // property
//     fname : "Emily",
//     lname: "Ross"
// };

// const anotherStudent = {
//     // property
//     fname : "Rachel",
//     lname: "Williams"
// };

// factory function
function createStudentInfo(fname, lname){
    return {
        firstName: fname,
        lname,

        showInfo: function(){
            return `${this.fname}. ${this.lname}`
        }
    };
}

const student1 = createStudentInfo("Emily", "Ross");
console.log(student1);
console.log(student1.showInfo());


const student2 = createStudentInfo("Rachel", "Musk");
console.log(student2);
