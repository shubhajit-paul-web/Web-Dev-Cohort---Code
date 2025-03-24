const prompt = require("prompt-sync")();
let n = Number(prompt("Enter a number: "));

let countDigits = 0;

while(n > 0) {
	n = Math.floor(n/10);
	countDigits++;
}

console.log(countDigits);
