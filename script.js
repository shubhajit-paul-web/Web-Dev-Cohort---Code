const prompt = require("prompt-sync")();
const n = prompt("Enter a number: "); // 4

// top
for(let i = 0; i < n; i++) {
    let stars = "";

    // Adding spaces
    for(let j = 0; j < n-i; j++) {
        stars += "  ";
    }

    // Adding stars
    stars += "*";
    if (i !== 0) {
        for(let j = 0; j < (i * 2) - 1; j++) {
            stars += "  ";
        }
        stars += " *";
    }
    console.log(stars);
}

// bottom
for(let i = n; i > 1; i--) {
    let stars = "";

    // Adding spaces
    for(let j = 0; j <= (n-i) + 1; j++) {
        stars += "  ";
    }

    // Adding stars
    stars += "*";
    if (i !== (n-2)) {
        for(let j = 0; j < ((i*2) - 1) - i; j++) {
            stars += "  ";
        }
        stars += " *";
    }
    console.log(stars);
}