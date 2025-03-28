const prompt = require("prompt-sync")();

// ? Question 1: Left rotation by 1 element

// function rotateElement(arr = []) {
// 	for (let i = 0; i < arr.length; i++) {
// 		if (arr[i + 1] || arr[i + 1] === 0) {
// 			[arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
// 		}
// 	}

// 	return arr;
// }

// console.log(rotateElement([1, 2, 3, 4, 5]));

// ? Question 2: Right rotation by 1 element

// function rightRotation(arr = []) {
//     for(let i = arr.length - 1; i >= 0; i--) {
//         if (arr[i-1] || arr[i-1] === 0) {
//             [arr[i], arr[i-1]] = [arr[i-1], arr[i]];
//         }
//     }

//     return arr;
// }

// console.log(rightRotation([1, 2, 3, 4, 5]));
// console.log(rightRotation(["A", "B", "C", "D", "E"]));

// ? Question 3: Left rotation by k element

const k = Number(prompt("Enter a number: ")); // 2

function leftRotation(arr = []) {
	for (let j = 0; j < k; j++) {
		for (let i = 0; i < arr.length; i++) {
			if (arr[i + 1] || arr[i + 1] === 0) {
				[arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
			}
		}
	}

	return arr;
}

console.log(leftRotation([1, 2, 3, 4, 5]));
