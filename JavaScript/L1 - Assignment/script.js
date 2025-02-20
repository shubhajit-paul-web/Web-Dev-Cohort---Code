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

