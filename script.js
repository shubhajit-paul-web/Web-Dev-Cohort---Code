// const prompt = require("prompt-sync")();
// const n = Number(prompt("Enter a number: "));

let arr = [4, 1, 45, 24, 5, 9, 14, 78];

let max = -Infinity;
let sMax = -Infinity;

for (let i = 0; i < arr.length; i++) {
	if (arr[i] > max) {
		sMax = max;
		max = arr[i];
	} else if (arr[i] > sMax && arr[i] < max) {
		sMax = arr[i];
	}
}

console.log(sMax);

