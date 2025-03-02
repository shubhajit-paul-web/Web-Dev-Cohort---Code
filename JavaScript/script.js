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


// const characters = ["Alok", "Maxim", "Andrew", "D-bee", "Antonio", "Caroline", "Chrono"];

// Math functions


// const OTP = Math.trunc((Math.random() * 8000) + 1000); // 1000 to 8000

// let age = 19;

// if (age >= 18) {
//     console.log("You are eligible for Vote");
// } else {
//     console.warn("You are not eligible for Vote, try again later!!!");
// }

// ? DSA Question
// const amount = Number(prompt("What is the final amount?"));

// let discount = 0;

// if (!isNaN(amount)) {
//     if (amount <= 5000) {
//         discount = 0;
//     } else if (amount > 5000 && amount <= 7000) {
//         discount = 5;
//     } else if (amount > 7000 && amount <= 9000) {
//         discount = 10;
//     } else if (amount > 9000) {
//         discount = 20;
//     }

//     console.log("Final amount to pay:", amount - Math.floor((discount * amount) / 100));
// } else {
//     console.log("Please enter a valid number/amount...");
// }


// ? DSA Question
let unit = Number(prompt("Enter the units")); // 700
let amount = 0;

if (!isNaN(unit)) {
    if (unit > 400) {
        amount = (unit - 400) * 13;
        unit = 400;
    } // 400
    if (unit > 200 && unit <= 400) {
        amount += (unit - 200) * 8;
        unit = 200;
    } // 200
    if (unit > 100 && unit <= 200) {
        amount += (unit - 100) * 6;
        unit = 100;
    } // 100
    if (unit <= 100) {
        amount += unit * 4.2;
    }

    console.log("Your electric bil amount is:", amount);
} else {
    console.log("Please enter the valid unit!!!");
}










