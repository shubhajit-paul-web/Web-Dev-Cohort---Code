// ? Question 1: Sum of 'n' natural numbers

// const inputValue = prompt("Enter a number?");

// if (inputValue !== null) {
//     const n = Number(inputValue);

//     if (!isNaN(n)) {
//         if (n > 0) {
//             let sum = 0;
//             for(let i = 1; i <= n; i++) {
//                 sum += i;
//             }
        
//             console.log(sum);
//         } else {
//             console.warn("Enter a number which is greater than 0");
//         }
//     } else {
//         console.warn("Please enter a valid number!!!");
//     }
// } else {
//     console.warn("You press cancle button, Try again...");
// }


// ? Question 2: Find all factors of a number

// const inputValue = prompt("Enter a number?");

// if (inputValue !== null) {
//     const n = Number(inputValue);

//     if (!isNaN(n)) {
//         if (n > 0) {
//             for(let i = 0; i <= Math.floor(n / 2); i++) {
//                 if (n % i === 0) {
//                     console.log(i);
//                 }
//             }
//             console.log(n);
//         } else {
//             console.warn("Enter a number which is greater than 0");
//         }
//     } else {
//         console.warn("Please enter a valid number!!!");
//     }
// } else {
//     console.warn("You press cancle button, Try again...");
// }


// ? Question 3: prime number

// const inputValue = prompt("Enter a number?");

// if (inputValue !== null) {
//     const n = Number(inputValue);

//     if (!isNaN(n)) {
//         if (n > 0) {
//             // let isPrime = true;
//             // for(let i = 2; i < Math.floor(n/2); i++) {
//             //     if (n % i === 0) {
//             //         isPrime = false;
//             //         break;
//             //     }
//             // }
//             // console.log(isPrime);
//             console.log(isPrime(n));
//         } else {
//             console.warn("Enter a number which is greater than 0");
//         }
//     } else {
//         console.warn("Please enter a valid number!!!");
//     }
// } else {
//     console.warn("You press cancle button, Try again...");
// }

// function isPrime(n) {
//     if (n <= 1) return false;
//     if (n === 2) return true;
//     if (n % 2 === 0) return false;
//     for(let i = 3; i <= Math.floor(Math.sqrt(n)); i += 2) {
//         if (n % i === 0) return false;
//     }
//     return true;
// }



// ? Question 4: sum of digit

// const inputValue = prompt("Enter a number?");

// if (inputValue !== null) {
//     let n = Number(inputValue);

//     if (!isNaN(n)) {
//         if (n > 0) {
//             // Main logic
//             let sumOfNums = 0;
//             while(n > 0) {
//                 let lastDigit = n % 10;
//                 sumOfNums += lastDigit;
//                 n = Math.floor(n/10);
//             }

//             console.log(sumOfNums);
//         } else {
//             console.warn("Enter a number which is greater than 0");
//         }
//     } else {
//         console.warn("Please enter a valid number!!!");
//     }
// } else {
//     console.warn("You press cancle button, Try again...");
// }


// ? Question 5: reverse a number

// const inputValue = prompt("Enter a number?");

// if (inputValue !== null) {
//     let n = Number(inputValue);

//     if (!isNaN(n)) {
//         if (n > 0) {
//             // Main logic: reversed = (reversed * 10) + last_digit
//             let reversedNumber = 0;
            
//             while(n > 0) {
//                 let lastDigit = n % 10;
//                 reversedNumber = (reversedNumber * 10) + lastDigit; 
//                 n = Math.floor(n/10); 
//             }

//             console.log(reversedNumber);
//         } else {
//             console.warn("Enter a number which is greater than 0");
//         }
//     } else {
//         console.warn("Please enter a valid number!!!");
//     }
// } else {
//     console.warn("You press cancle button, Try again...");
// }


// ? Question 6: Strong number

const inputValue = prompt("Enter a number?");

if (inputValue !== null) {
    let n = Number(inputValue);

    if (!isNaN(n)) {
        if (n > 0) {
            // Main logic
            let sumOfNums = n;
            for(let i = 1; i <= Math.floor(n/2); i++) {
                if (n % i === 0) {
                    sumOfNums += i;
                }
            }
            
            if (sumOfNums === n) {
                console.log(n, "is a strong number");
            } else {
                console.log(n, "is not a strong number!!!");
            }
        } else {
            console.warn("Enter a number which is greater than 0");
        }
    } else {
        console.warn("Please enter a valid number!!!");
    }
} else {
    console.warn("You press cancle button, Try again...");
}