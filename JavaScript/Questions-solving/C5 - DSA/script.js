// ? Question 1: ISBN Number
/* Description: An ISBN (International Standard Book Number) is a unique 10-digit
number assigned to books. The ISBN is valid if the sum of its digits, each
multiplied by its position (1 to 10), is divisible by 11. */

// const ISBN_Number = prompt("Enter a ISBN number to check it is valid or not.");

// function isISBNCorrect(ISBN) {
//     if (ISBN) {
//         if (ISBN.toString().length === 10) {
//             let ISBN_Arr = [];
//             for(let i = 0; i < ISBN.length; i++) {
//                 if (!isNaN(ISBN[i]) || ISBN[ISBN.length - 1] === "X") {
//                     ISBN_Arr[ISBN_Arr.length] = ISBN[i] !== "X" ? Number(ISBN[i]) : 10;
//                 } else {
//                     return `'${ISBN[i]}' is not a number!`;
//                 }
//             }
    
//             let sumOfDigits = 0;
//             for (let i = 0; i < ISBN_Arr.length; i++) {
//                 sumOfDigits += ISBN_Arr[i] * (i + 1);
//             }
    
//             if (sumOfDigits % 11 === 0) {
//                 return `🟢 ${ISBN} is a valid ISBN number.`;
//             }
//             return `${ISBN} is a invalid ISBN number!!!`;
//         } else {
//             return "Error: Your ISBN number is incorrect, because it's not equal to 10 digits.";
//         }
//     }
//     return `Error: Input field is blank, provide a 10 digit number.`;
// }

// const ans = isISBNCorrect(ISBN_Number); // answer

// if (ans.startsWith("Error")) {
//     console.error(ans);
// } else {
//     console.log(ans);
// }


// ? Question 2: HCF/GCD
/* Description: The Highest Common Factor (HCF) or Greatest Common Divisor
(GCD) of two numbers is the largest number that divides both numbers
without leaving a remainder.
    Euclidean Algorithm (Efficient Method):
    Formula: GCD(a, b) = GCD(b, a % b)
*/

// function getGCD(a = 0, b = 0) {
//     if (a || b) {
//         while(b > 0) {
//             [a, b] = [b, a % b];
//         }
//         return a;
//     } else {
//         return `Please pass arguments to 'a' and 'b'`;
//     }
// }

// console.log(getGCD(12, 18));


// ? Question 3: Harshad Number
/* Description: A number is a Harshad number if it is divisible by the sum of its
digits. */

// function isHarshadNum(num = 0) {
//     if (Number.isInteger(num)) {
//         let numCopy = num;
//         let sumOfDigits = 0;

//         while(numCopy > 0) {
//             sumOfDigits += numCopy % 10;
//             numCopy = Math.floor(numCopy/10);
//         }
        
//         if (num % sumOfDigits === 0) {
//             return `${num} is a Harshad Number`;
//         }
//         return `${num} is not a Harshad Number`;
//     } else {
//         return "Please provide a number.";
//     }
// }

// console.log(isHarshadNum(18));


// ? Question 4: Perfect Square
/* Description: A number is a perfect square if it is the square of an integer. */

// function isPerfectSquare(num = 0) {
//     if (Number.isInteger(num)) {
//         if (Number.isInteger(Math.sqrt(num))) {
//             return `${num} is a Perfect Square.`;
//         }
//         return `${num} is not a Perfect Square!!`;
//     } else {
//         return `${num} is not a Integer.`;
//     }
// }

// console.log(isPerfectSquare(25));


// ? Question 5: Abundant Number
/* Description: A number is abundant if the sum of its proper divisors is greater
than the number itself. */

// function isAbundant(num = 0) {
//     if (Number.isInteger(num)) {
//          let sum = 0;
//          for(let i = 1; i <= Math.floor(num/2); i++) {
//             if (num % i === 0) sum += i;
//          }
         
//          if (sum > num) {
//             return `${num} is a Abundant Number.`;
//          }
//          return `${num} is not a Abundant Number!!`;
//     } else {
//         return `${num} is not a Integer.`;
//     }
// }

// console.log(isAbundant(12));
// console.log(isAbundant(15));
// console.log(isAbundant(66));


// ? Question 6: Fibonacci Series using Loop
/* Description: Print Fibonacci series up to N terms using a loop. 
   Formula: Next Number = Previous Number + Second Last Number
*/

// function fibonacciSeries(N) {
//     if (Number.isInteger(N) && N > 2) {
//         let seriesArr = [0, 1];
//         for(let i = 2; i < N; i++) {
//             let len = seriesArr.length;
//             seriesArr[len] = seriesArr[len - 2] + seriesArr[len - 1];
//         }
//         return seriesArr.toString();
//     } else {
//         return `${num} is not a Integer.`;
//     }
// }

// console.log(fibonacciSeries(6));
// console.log(fibonacciSeries(8));
// console.log(fibonacciSeries(10));
// console.log(fibonacciSeries(15));


// ? Question 7:  Find Numbers with Exactly X Divisors
/* Description:  Find numbers that have exactly X divisors. 
   Formula: Next Number = Previous Number + Second Last Number
*/
