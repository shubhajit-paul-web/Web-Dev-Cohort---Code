// const prompt = require("prompt-sync")();
// const n = Number(prompt("Enter a number: "));
// let arr = [4, 1, 45, 24, 5, 9, 14, 78];

let arr = [1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0];

let j = 0;

for(let i = 0; i < arr.length; i++) {
	if (arr[i] === 1) {
		[arr[j], arr[i]] = [arr[i], arr[j]];
		j++;
	}
}

console.log(arr);
