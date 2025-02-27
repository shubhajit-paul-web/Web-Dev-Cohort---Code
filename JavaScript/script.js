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


// IIFE (Immediately Invoked Function Expression)

// (function(a, b) {
//     console.log(a, b, "hello duniya...");
// })("Shubhajit", "Paul,")

// outside this,
// write variables, functions, etc. out of any scope/boundary

// {}, (), [] - local scope