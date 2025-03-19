// ? Perfect Square

// const num = 25;

// if (Number.isInteger(Math.sqrt(num))) {
//     console.log("Perfect Square");
// } else {
//     console.log("It's Perfect Square!");
// }

// ? Pattern
// const prompt = require("prompt-sync")();
// const n = prompt("Enter a number: ");

// let counter = 1;
// for(let i = n; i > 0; i--) {
//     let spaceCount = n - i;
//     let nums = "";
    
//     for(let j = 0; j < n; j++) {
//         if (j < spaceCount) {
//             nums += "  ";
//         } else nums += counter + " ";
//     }
//     counter++;
//     console.log(nums);
// }


// ? Pattern - Hollow Diamond

const prompt = require("prompt-sync")();
const n = prompt("Enter a number: "); // 4

for(let i = 0; i < n; i++) {
    let nums = "";
    
    // spaces
    for(let j = 0; j < (n-i); j++) {
        nums += "  ";
    }

    // nums
    for(let y = 0; y <= i; y++) {
        nums += (y + 1) + " ";
    }

    for(let x = i; x > 0; x--) {
        nums += x + " ";
    }

    console.log(nums);
}