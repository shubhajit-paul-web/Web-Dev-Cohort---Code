class Greet {
    constructor(username,) {
        this.name = username;
    }

    printMsg() {
        console.log(`Hello, ${this.name}`);
    }
}

const userOne = new Greet("Shubhajit");
userOne.printMsg();
