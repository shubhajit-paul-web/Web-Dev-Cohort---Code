class Student {
	constructor(name, rollNumber, marks = []) {
		this.name = name;
		this.rollNumber = rollNumber;
        if (marks.length !== 5) {
            console.warn("Warning: Expected exactly 5 marks.");
        }
        this.marks = marks.slice(0, 5);
	}

	calculateAverage() {
		let sum = this.marks.reduce((total, mark) => total += mark);
		return Math.floor(sum / 5);
	}

    isPassed() {
        return this.calculateAverage() >= 35;
    }

    displayDetails() {
        console.log(`Name: ${this.name}`);
        console.log(`Roll No: ${this.rollNumber}`);
        console.log(`Marks: ${this.marks.join(", ")}`);
        console.log(`Average: ${this.calculateAverage()}`);
        console.log(`Passed: ${this.isPassed()}`);
        console.log("==========================")
    }
}

const firstStudent = new Student("Shubhajit", 107, [49, 78, 60, 84, 72]);
firstStudent.displayDetails();

const secondStudent = new Student("Debabrata", 67, [17, 48, 38, 43, 5]);
secondStudent.displayDetails();