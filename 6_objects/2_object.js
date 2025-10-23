const student = {
    // property
    fname : "Emily",
    lname: "Ross",
    // method
    sayHi: () => {
        console.log("Hi everyone");
    },

    sayGoodbye(){
        console.log("Bye bye")
    },

    studentInfo: function(){
        console.log(`${this.fname} ${this.lname}`)
    }
};

student.sayHi();
student.studentInfo();
