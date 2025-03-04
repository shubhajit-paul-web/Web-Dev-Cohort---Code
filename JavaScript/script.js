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
// let unit = Number(prompt("Enter the units")); // 700
// let amount = 0;

// if (!isNaN(unit)) {
//     if (unit > 400) {
//         amount = (unit - 400) * 13;
//         unit = 400;
//     } // 400
//     if (unit > 200 && unit <= 400) {
//         amount += (unit - 200) * 8;
//         unit = 200;
//     } // 200
//     if (unit > 100 && unit <= 200) {
//         amount += (unit - 100) * 6;
//         unit = 100;
//     } // 100
//     if (unit <= 100) {
//         amount += unit * 4.2;
//     }

//     console.log("Your electric bil amount is:", amount);
// } else {
//     console.log("Please enter the valid unit!!!");
// }


// ? Question 1: Return only name of students in capital

// const students = [
//     {name: "Shubhajit", rollNumber: 31, marks: 80},
//     {name: "Debu", rollNumber: 15, marks: 69},
//     {name: "Balaram", rollNumber: 16, marks: 35},
//     {name: "Raju", rollNumber: 7, marks: 55},
// ];

// // const studentsNames = students.map((student) => student.name.toUpperCase());

// let studentsNames = [];

// for(let i = 0; i <= students.length - 1; i++) {
//     studentsNames.push(students[i].name.toUpperCase());
// }

// console.log(studentsNames);


// ? Question 2: Return only details of those who scored more than 60 marks

// const students = [
//     {name: "Shubhajit", rollNumber: 31, marks: 80},
//     {name: "Debu", rollNumber: 15, marks: 69},
//     {name: "Balaram", rollNumber: 16, marks: 35},
//     {name: "Raju", rollNumber: 7, marks: 55},
// ];

// const goodStudentsDetails = students.filter((student) => student.marks >= 60);

// console.log(goodStudentsDetails);


// ? Question 3: More than 60 marks and rollNumber greater than 15

// const students = [
//     {name: "Shubhajit", rollNumber: 31, marks: 80},
//     {name: "Debu", rollNumber: 15, marks: 69},
//     {name: "Balaram", rollNumber: 16, marks: 35},
//     {name: "Raju", rollNumber: 7, marks: 75},
// ];

// const studentsDetails = students.filter((student) => student.rollNumber >= 15 && student.marks >= 60);

// console.log(studentsDetails);


// ? Question 4: Sum of marks of all students

// const students = [
//     {name: "Shubhajit", rollNumber: 31, marks: 80},
//     {name: "Debu", rollNumber: 15, marks: 69},
//     {name: "Balaram", rollNumber: 16, marks: 35},
//     {name: "Raju", rollNumber: 7, marks: 75},
// ];

// const sumOfMarks = students.reduce((acc, student) => acc + student.marks, 0);

// console.log(sumOfMarks);


// ? Question 5: Return only names of students who scored more than 60

// const students = [
//     {name: "Shubhajit", rollNumber: 31, marks: 80},
//     {name: "Debu", rollNumber: 15, marks: 69},
//     {name: "Balaram", rollNumber: 16, marks: 35},
//     {name: "Raju", rollNumber: 7, marks: 55},
// ];

// let studentsNames = [];
// students.forEach((student) => {
//     if (student.marks >= 60) {
//         studentsNames.push(student.name);
//     }
// });

// console.log(studentsNames);


// function myMap(arr = [], fn) {
//     let newArr = [];

//     for(let i = 0; i <= arr.length -1; i++) {
//         newArr.push(fn(arr[i], i, arr));
//     }

//     return newArr;
// }

// let newArr = myMap([1,2,3,4,5], function(elem, index, arr) {
//     return elem % 2 === 0;
// });

// console.log(newArr);

// ? Question
// function counter() {
//     let val = 0;

//     return function () {
//         console.log(++val);
//     }
// }

// let makeCount = counter();

// makeCount()
// makeCount()
// makeCount()
// makeCount()
// makeCount()


// ? Question
// function fnLimiter(fn, limit = 0) {
//     let totalCalled = 1;

//     return function() {
//         if (totalCalled <= limit) {
//             totalCalled++;
//             fn();     
//         }
//     }
// }

// let limiter = fnLimiter(function() {
//     console.log("hey");
// }, 3);

// limiter()
// limiter()
// limiter()


// ? Question: Append "JS" to Each Word

// const words = ["React", "Node", "Express"];

// const updatedWords = words.map((word) => word + "JS");

// console.log(updatedWords);


// ? Question: Square Each Number in an Array

// const nums = [2, 4, 6, 8, 10, 12, 14];

// const numsSquare = nums.map((num) => num * num);

// console.log(numsSquare);


// ? Question: Remove Falsy Values (false, null, 0, "", undefined, NaN)

// const arr = [0, "Hello", false, null, 42, undefined];

// const newArr = arr.filter((elem) => Boolean(elem))

// console.log(newArr);


// ? Question: Filter Out Short Words (Words Less Than 5 Letters)

// const words = ["apple", "is", "good", "mango"];

// const shortWords = words.filter((word) => word.length >= 5);

// console.log(shortWords);


// ? Question: Find Words That Contain Letter 'a'

// const words = ["dog", "cat", "apple", "ball"];

// const newWords = words.filter((word) => word.includes("a"));

// console.log(newWords);


// ? Question: Find Maximum Number

// const nums = [5, 8, 12, 3, 7];

// const maximumNum = nums.reduce((acc, num, i) => {
//     acc = num;

//     for(let i = 0; i <= nums.length - 1; i++) {
//         if (acc < nums[i]) {
//             acc = nums[i];
//         }
//     }

//     return acc;
// }, 0);

// console.log(maximumNum);


// ? Question: Count Occurrences of Each Element

// const words = ["apple", "banana", "apple", "orange", "banana", "apple"];

// const ans = words.reduce((acc, word) => {
//     if (acc[word]) {
//         acc[word]++;
//     } else {
//         acc[word] = 1;
//     }

//     return acc;
// }, {});

// console.log(ans);


// ? Question: Calculate Total Price from Array of Objects

// const cart = [
//     { item: "Book", price: 100 },
//     { item: "Pen", price: 50 },
//     { item: "Bag", price: 500 }
// ];

// const totalPrice = cart.reduce((acc, elem) => acc + elem.price, 0);

// console.log(totalPrice);


// ? Question: Get the Sum of Squared Even Numbers

// const nums = [1, 2, 3, 4, 5, 6]; // 2² + 4² + 6² = 56

// const sum = nums.filter((num) => num % 2 === 0)
// .map((num) => num * num)
// .reduce((acc, num) => acc + num, 0);

// console.log(sum);


// ? Question: Count Words with More Than 5 Letters

// const words = ["apple", "banana", "dog", "elephant"];

// const wordsCount = words.reduce((acc, word) => {
//     if (word.length > 5) {
//         acc++;
//     }

//     return acc;
// }, 0)

// console.log(wordsCount);


// ? Real-world Question 1: You have an array of objects containing first and last names. Convert it into an array of full names.
// Output: ["John Doe", "Jane Smith"]

// const users = [
//     { firstName: "John", lastName: "Doe" },
//     { firstName: "Jane", lastName: "Smith" }
// ];

// const usersFullNames = users.map((user) => `${user.firstName} ${user.lastName}`);

// console.log(usersFullNames);


// ? Real-world Question 2: You have an array of prices in INR. Convert them into USD (1 INR = 0.012 USD).
// Output: [1.2, 6, 18, 24]

// const pricesInINR = [100, 500, 1500, 2000];

// const pricesInUSD = pricesInINR.map((INR) => INR * 0.012);

// console.log(pricesInUSD);


// ? Real-world Question 3: Extract only the email addresses from a list of user objects.
// Output: ["amit@example.com", "rahul@example.com"]

// const users = [
//     { name: "Amit", email: "amit@example.com" },
//     { name: "Rahul", email: "rahul@example.com" }
// ];

// const usersEmailsList = users.map((user) => user.email);

// console.log(usersEmailsList);


// ? Real-world Question 4: Filter Products That Are in Stock
// Output: [ { name: "Laptop", stock: 10 }, { name: "Tablet", stock: 5 } ]

// const products = [
//     { name: "Laptop", stock: 10 },
//     { name: "Phone", stock: 0 },
//     { name: "Tablet", stock: 5 }
// ];

// const productsInStock = products.filter((product) => product.stock);

// console.log(productsInStock);


// ? Real-world Question 5: Calculate Total Expense from a List of Transactions
// Output: Total Debit: 700, Total Credit: 1000

// const transactions = [
//     { type: "debit", amount: 500 },
//     { type: "credit", amount: 1000 },
//     { type: "debit", amount: 200 }
// ];

// const transactionsAmount = transactions.reduce((acc, elem) => {
//     if (acc[elem.type]) {
//         acc[elem.type] += elem.amount;
//     } else {
//         acc[elem.type] = elem.amount;
//     }

//     return acc;
// }, {});

// console.log(`Total Debit: ${transactionsAmount.debit}, Total Credit: ${transactionsAmount.credit}`);

  
// ? Real-world Question 6: Find the Most Expensive Product
// Output: "Laptop"

// const products = [
//     { name: "Phone", price: 20000 },
//     { name: "Laptop", price: 60000 },
//     { name: "Tablet", price: 30000 }
// ];

// const highestProduct = products.reduce((acc, product) => {
//     if (acc < product.price) {
//         acc = product.price;
//     }
//     return acc;
// }, products[0].price);

// const expensiveProduct = products.filter((product) => product.price === highestProduct)[0].name;

// console.log(expensiveProduct);


// ? Real-world Question 7: Calculate Average Rating from Reviews
// Output: Average Rating: 4

// const reviews = [
//     { user: "Amit", rating: 4 },
//     { user: "Neha", rating: 5 },
//     { user: "Rahul", rating: 3 }
// ];

// const sumOfReviews = reviews.reduce((acc, review) => {
//     return acc += review.rating / reviews.length;
// }, 0);

// console.log(sumOfReviews);


// ? Real-world Question 8: Get All Unique Tags from Blog Posts
// Output: ["JavaScript", "Frontend", "Backend", "Design"]

// const posts = [
//     { title: "React", tags: ["JavaScript", "Frontend"] },
//     { title: "Node.js", tags: ["JavaScript", "Backend"] },
//     { title: "CSS", tags: ["Frontend", "Design"] }
// ];

// const allTags = [];

// posts.forEach((post) => {
//     post.tags.forEach((tag) => allTags.push(tag));
// });

// const uniqueTags = [...new Set(allTags)];

// console.log(uniqueTags);


// ? Real-world Question 9: Categorize Expenses by Type
// Output: { Food: 500, Transport: 100 }

// const expenses = [
//     { category: "Food", amount: 200 },
//     { category: "Transport", amount: 100 },
//     { category: "Food", amount: 300 }
// ];

// const obj = {};

// const expensesByType = expenses.reduce((acc, elem) => {
//     if (acc[elem.category]) {
//         acc[elem.category] += elem.amount;
//     } else {
//         acc[elem.category] = elem.amount;
//     }

//     return acc;
// }, {});

// console.log(expensesByType);


// ? Real-world Question 10: Super Challenge – Build a Data Processing Pipeline
// Task: Given a list of students,
// Remove students with scores < 50
// Convert names to uppercase
// Find the average score of remaining students

// Output:
// ["NEHA", "RAHUL"]
// Average Score: 70

// const students = [
//     { name: "Amit", score: 45 },
//     { name: "Neha", score: 85 },
//     { name: "Rahul", score: 55 }
// ];
  
// const filteredStudents = students.filter((student) => student.score > 50);
// const studentsNames = filteredStudents.map((student) => student.name.toUpperCase());

// const avgScore = filteredStudents.reduce((acc, student, i, arr) => {
//     let totalScore = filteredStudents.reduce((acc, elem) => acc += elem.score, 0);
//     return totalScore / arr.length;
// }, 0);

// console.log(studentsNames);
// console.log("Average Score:", avgScore);






  