// function greetmen(name = "[Please pass the argument]") {
//     console.log(`Hello, ${name}`);
// }

// greetmen(undefined)

// * JavaScript default parameter mechanism

// Behind the scenes, javascript treats default paramers as:

// function greetmen(name) {
//     if (name === undefined) {
//         name = "[Please pass the argument]";
//     }

//     console.log(`Hello, ${name}`);
// }

// greetmen(undefined)


// fat arrow function

const add = (a, b) => a + b;

let ans = add(5, 10);

console.log(ans);
