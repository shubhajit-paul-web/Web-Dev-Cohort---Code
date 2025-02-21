// ? Question 1: Age Category Message - Ask the user for their age. If they are under 18, print "You are a minor." If they are between 18 and 60, print "You are an adult." If they are above 60, print "You are a senior citizen."

// const userAge = Number(prompt("Enter your age"));

// if (userAge < 18) {
//     console.log("You are a minor");
// } else if(userAge >= 18 && userAge < 60) {
//     console.log("You are an adult");
// } else {
//     console.log("You are a senior citizen");
// }


// ? Question 2: Even or Odd Sum - Take two numbers from the user using prompt(). If the sum of both numbers is even, print "Even Sum"; otherwise, print "Odd Sum." 

// const number_1 = Number(prompt("Enter number 1"));
// const number_2 = Number(prompt("Enter number 2"));

// const sum = number_1 + number_2;

// if (sum % 2 === 0) {
//     console.log("Even Sum");
// } else {
//     console.log("Odd Sum");
// }


// ? Question 6: Simple Calculator - Ask the user for two numbers and an operator (+, -, *, /). Perform the operation and display the result.

// const number_1 = Number(prompt("Enter first number"));
// const number_2 = Number(prompt("Enter second number"));
// const operator = prompt("Enter a operator");

// if (operator === "+") {
//     console.log(number_1 + number_2);
// } else if (operator === "-") {
//     console.log(number_1 - number_2);
// } else if (operator === "*") {
//     console.log(number_1 * number_2);
// } else if (operator === "/") {
//     console.log(number_1 / number_2);
// } else {
//     console.log("Please enter a valid operator!");
// }


// ? Question 7: Positive, Negative, or Zero - Take a number input and check if it is positive, negative, or zero.

// const number = Number(prompt("Enter a Positive, Negative, or Zero number"));

// if (number === 0) {
//     console.log("it is a Zero");
// } else if (number < 0) {
//     console.log(number, "is a Negative Number");
// } else {
//     console.log(number, "is a Positive Number");  
// }


// ? Question 8: User Greeting - Ask for the user's name and time (24-hour format). Greet them accordingly: 
// 5 AM-12 PM: "Good Morning, [Name]!" 
// 12 PM-5 PM: "Good Afternoon, [Name]!" 
// 5 PM-9 PM: "Good Evening, [Name]!" 
// 9 PM-5 AM: "Good Night, [Name]!"

// const userName = prompt("Enter your name");
// const currentTime = Number(prompt("Enter your current time (24-hour format)"));

// // 24-hour format: 1-24 (0-12: "AM" | 12-24 "PM")
// if (currentTime >= 5 && currentTime < 12) {
//     console.log("Good Morning,", userName);
// } else if (currentTime >= 12 && currentTime < 17) {
//     console.log("Good Afternoon,", userName);
// } else if (currentTime >= 17 && currentTime < 21) {
//     console.log("Good Evening,", userName);
// } else if (currentTime < 5) {
//     console.log("Good Night,", userName);
// }


// ? Question 9: Traffic Light System - Ask the user for a traffic light color (red, yellow, green). Print appropriate messages: 
// Red: "Stop!" 
// Yellow: "Get Ready!" 
// Green: "Go!"

// const trafficLightColor = prompt("Enter a traffic light color (red, yellow, green)").toLowerCase();

// if (trafficLightColor === "red") {
//     console.log("🔴 Stop!");
// } else if (trafficLightColor === "yellow") {
//     console.log("🟡 Get Ready!");
// } else if (trafficLightColor === "green") {
//     console.log("🟢 Go!");
// } else {
//     console.log("Please enter a valid traffic light color name");
// }


// ? Question 10: Multiplication Table - Ask the user for a number and print its multiplication table up to 10.

// const number = Number(prompt("Enter a number"));

// for(let i = 0; i <= 10; i++) {
//     console.log(`${number} x ${i} = ${number * i}`);
// }

// ? Question 11: Grade Calculator - Ask the user for their marks (0-100). 
// Assign grades based on the range: 
// 90-100: A 
// 80-89: B 
// 70-79: C 
// 60-69: D 
// Below 60: F

// const marks = Number(prompt("Enter your marks (0-100)"));

// if (marks >= 90 && marks <= 100) {
//     console.log("A");
// } else if (marks >= 80 && marks <= 89) {
//     console.log("B");
// } else if (marks >= 70 && marks <= 79) {
//     console.log("C");
// } else if (marks >= 60 && marks <= 69) {
//     console.log("D");
// } else {
//     console.log("Fail");
// }

// ? Question 12: Simple Login System - Set a predefined username and password. Ask the user to enter their credentials using prompt(). If correct, print "Login Successful"; otherwise, print "Incorrect username or password".

// const username = "shubhajit_045";
// const password = "123abc";

// const usernameInput = prompt("Enter your username");
// const passwordInput = prompt("Enter your password");

// if (usernameInput === username && passwordInput === password) {
//     console.log(username, ", Login Successful");
// } else {
//     console.log("⚠️ Incorrect username or password!");
// }


// ? Question 22: Nested Condition Challenge - Ask the user for their age and salary. Print a message based on conditions: 
// If age is below 18, print "Not eligible" 
// If age is 18 or more but salary is less than 20,000, print "Low Salary" 
// If salary is ₹50,000 or more, print "High Salary" 
// . Otherwise, print "Medium Salary"

// const age = prompt("Enter your age");
// const salary = Number(prompt("Enter your salary"));

// if (age < 18) {
//     console.log("Not eligible");
// } else if (age >= 18) {
//     if (salary < 20000) {
//         console.log("Low Salary");
//     } else if (salary >= 50000) {
//         console.log("High Salary");
//     } else {
//         console.log("Medium Salary");
//     }
// }


// ? Write a program that prints numbers from 1 to 10 using a for loop. Extra Challenge: Print only even numbers.

// for(let i = 0; i <= 10; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }


// ? Write a program that prints numbers from 10 to 1 using a while loop.

// let i = 10;

// while (i > 0) {
//     console.log(i);
//     i--;
// }


// ? Write a program that finds the sum of numbers from 1 to 100 using a loop. Extra Challenge: Find the sum of only odd numbers between 1 and 100.

// let sum = 0;

// for(let i = 1; i <= 100; i++) {
//     if (i % 2 !== 0) {
//         sum += i;
//     }
// }

// console.log(sum);


// ? Take a number from the user and print its multiplication table (e.g., 5 × 1 = 5 to 5 × 10 = 50). Extra Challenge: Use a while loop instead of a for loop.

// const number = Number(prompt("Enter a number"));

// let i = 1;
// while (i <= 10) {
//     console.log(`${number} x ${i} = ${number * i}`);
//     i++;
// }


// ? Print this pattern using loops

// for(let i = 1; i <= 5; i++) {
//     for(let x = 1; x <= i; x++) {
//         document.write("*");
//     }
//     document.write("<br>");
// }

// ? Reverse order
// for(let i = 5; i >= 1; i--) {
//     for(let x = 1; x <= i; x++) {
//         document.write("*");
//     }
//     document.write("<br>");
// }


// ? FizzBuzz Problem
// Print numbers from 1 to 50, but:
// If a number is divisible by 3, print "Fizz".
// If a number is divisible by 5, print "Buzz".
// If a number is divisible by both 3 and 5, print "FizzBuzz".

// for(let i = 1; i <= 50; i++) {
//     if (i % 3 === 0) {
//         console.log("Fizz");
//     } else if (i % 5 === 0) {
//         console.log("Buzz");
//     } else if (i % 3 === 0 && i % 5 === 0) {
//         console.log("FizzBuzz");
//     }
// }


// ? Find the largest number in an array
// Take an array like [10, 45, 99, 23, 67] and find the largest number using a loop.

// let arr = [10, 45, 99, 23, 67];

// let largestNum = 0;

// for (let i = 0; i < arr.length; i++) {
//     for(let x = 0; x < arr.length; x++) {
//         if (arr[i] < arr[x]) {
//             largestNum = arr[x];
//         }
//     }
// }

// console.log(largestNum);
