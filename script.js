const prompt = require("prompt-sync")();
const n = Number(prompt("Enter a number: "));

for(let i = 0; i < n; i++) {
	let nums = "";
	
	// adding spaces
	for(let j = 0; j < (n-i) - 1; j++) {
		nums += "  ";
	}

	// adding nums
	for(let j = 0; j <= i; j++) {
		nums += (i + 1) + "   ";
	}
	console.log(nums);
}
