// ! 1️⃣ Console & Basic Operations (5 Questions)

// ? Log "Hello, JavaScript!" to the console in 3 different ways.

// // 1
// console.log("Hello, JavaScript!");
// // 2
// console.info("Hello, JavaScript!");
// // 3
// console.warn("Hello, JavaScript!");

// // Extra
// console.error("Hello, JavaScript!");


// ? Perform 35 * 2 - (10 / 2) + 7 and log the result.

// console.log(35 * 2 - (10 / 2) + 7);


// ? Log the data type of "123", 123, true, and null using typeof.

// console.log(typeof "123");
// console.log(typeof 123);
// console.log(typeof true);
// console.log(typeof null);


// ? Write a program that swaps the values of two variables.

// * 1st way
// let a = 5;
// let b = 10;

// let c = a;
// a = b;
// b = c;

// console.log(a, b);

// * 2nd way
// let a = 5;
// let b = 10;

// [a, b] = [b, a];

// console.log(a, b);

// * 3rd way
// let a = 5;
// let b = 10;

// let c = a;
// a = a + b;
// b = a - b;
// a = b + c;

// console.log(a, b);


// ? Use console.group() to organize logs into a group.
// console.groupCollapsed("Students names list");
//     console.log("Shubhajit Paul");
//     console.log("Debabrata Barman");
//     console.log("Rahul Paul");
//     console.log("Raju Paul");
// console.groupEnd();


// ! 1️⃣ Console & Basic Operations (5 Questions)

// ? Declare a const object, modify its properties, and log the updated object.

// const obj = {
//     name: "Shubhajit Paul",
//     gender: "male",
//     age: 19,
//     email: "example123@gmail.com"
// }

// console.log("before:", obj);

// // modifications
// obj.email = "hello@outlook.com";

// console.log("after:", obj);


// ? Convert "50" (string) into a number using 3 different methods.

// let str = "50";

// // 1st way
// console.log(Number(str));
// // 2nd way
// console.log(parseInt(str));
// // 3rd way
// console.log(+str);


// ? Check if "JavaScript" contains "Script" without using .includes().

