const prompt = require("prompt-sync")();
const n = prompt("Enter a number: "); // 5

for(let i = 0; i < n; i++) {
    let stars = "";

    // Spaces
    for(let j = 0; j < i; j++) {
        stars += " ";
    }

    // Stars
    stars += "*";
    if (i !== n-1) {
        for(let j = ((n-i)*2)-3; j > 0; j--) {
            stars += " ";
        }
        stars += "*";
    }
    
    console.log(stars);
}


