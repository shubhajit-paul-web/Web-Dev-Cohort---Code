class User {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }

    // Private
    #usernameId = "silent_shubhajit_";
    #passwordId = 4540789;

    login() {
        if (this.username === this.#usernameId) {
            if (this.password == this.#passwordId) {
                console.log(`Welcome, ${this.#usernameId}`);
                console.log("Instagram reels...");
                console.log("Instagram posts...");
            } else {
                console.log("Password is incorrect, please try again!");
            }
        } else {
            console.log("Username is incorrect!");
        }
    }
}

const userOne = new User("silent_shubhajit_", 4540789);
userOne.login();