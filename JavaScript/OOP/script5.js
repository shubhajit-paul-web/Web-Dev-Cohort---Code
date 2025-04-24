class Student {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

}

Student.prototype.printFullName = function() {
    console.log(`${this.firstName} ${this.lastName}`);
}


const studentOne = new Student("Shubhajit", "Paul");
studentOne.printFullName();

const studentTwo = new Student("Debabrata", "Barman");
studentTwo.printFullName();
