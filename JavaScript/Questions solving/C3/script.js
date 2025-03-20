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

// const prompt = require("prompt-sync")();
// const n = prompt("Enter a number: "); // 4

// for(let i = 0; i < n; i++) {
//     let nums = "";
    
//     // spaces
//     for(let j = 0; j < (n-i); j++) {
//         nums += "  ";
//     }

//     // nums
//     for(let y = 0; y <= i; y++) {
//         nums += (y + 1) + " ";
//     }

//     for(let x = i; x > 0; x--) {
//         nums += x + " ";
//     }

//     console.log(nums);
// }


// ? 'V' Shape Pattern
// const prompt = require("prompt-sync")();
// const n = prompt("Enter a number: "); // 5

// for(let i = 0; i < n; i++) {
//     let stars = "";

//     // Spaces
//     for(let j = 0; j < i; j++) {
//         stars += " ";
//     }

//     // Stars
//     stars += "*";
//     if (i !== n-1) {
//         for(let j = ((n-i)*2)-3; j > 0; j--) {
//             stars += " ";
//         }
//         stars += "*";
//     }
    
//     console.log(stars);
// }

// ? Square Hollow Pattern
const prompt = require("prompt-sync")();
const n = Number(prompt("Enter a number: ")); // 5

for(let i = 0; i < n; i++) {
	let stars = "";

	if (i === 0 || i === (n-1)) {
		for(let j = 0; j < (n-1); j++) {
			stars += "*   ";
		}
	} else {
		for(let j = 0; j < (n-1); j++) {
			if (j === 0 || j === (n-2)) {
				stars += "*   ";
			}
			if(j !== 0 && j !== (n-2)) {
				stars += "    ";
			}
		}
	}

	console.log(stars);
}