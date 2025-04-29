class User {
    #mobileNumber;
    constructor(name, gender, age, mobileNum) {
        this.name = name;
        this.gender = gender;
        this.age = age;
        this.#mobileNumber = mobileNum;
    }
}

const user1 = new User("Shubhajit Paul", "Male", 19, 3987345637);

console.log(user1);
// console.log(user1.#mobileNumber);
