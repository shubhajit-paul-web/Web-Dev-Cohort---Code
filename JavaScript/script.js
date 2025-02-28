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

// Array - Data Structure: []

// const friends = ["Shubhajit", "Debabrata", "Rahul", "Raj", "Raju"];

// const arr = [
//     ["Alok", "Demitri"],
//     ["Maxim", "Keli"],
//     [
//         "Skyler", 
//         [
//             "Glow wall",
//             "animation"
//         ]
//     ],
// ];

// console.log(arr[2][1][0]);


const characters = ["Alok", "Andrew", "Antonio", "Caroline", "Chrono"];

const value = characters.push("D-bee", "Maxim");

// console.log("returned value:", value);

// console.log(characters);


let arr = ["B", "D", "A", "C", "F", "E", "G"];
let nums = [44, 5, 100, 2, 20, 4, 16, 8];

let ans = nums.reverse()

console.log(ans);




