const prompt = require("prompt-sync")();
const n = Number(prompt("Enter a number: "));

for(let i = 0; i < n; i++) {
	let stars = "";

	// Adding left side spaces
	for(let j = 0; j < (n-i); j++) {
		stars += " ";
	}

	// Adding stars
	for(let j = 0; j <= i; j++) {
		if (i === (n-1)) {
			stars += "* ";
		} else {
			if (j === 0 || j === i) {
				stars += "* ";
			}
			if (j !== 0 && j !== i) {
				stars += "  ";
			}
		}
	}
	console.log(stars);	
}
