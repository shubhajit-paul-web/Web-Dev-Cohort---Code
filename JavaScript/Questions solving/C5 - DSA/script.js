// ? Question 1: ISBN Number
/* Description: An ISBN (International Standard Book Number) is a unique 10-digit
number assigned to books. The ISBN is valid if the sum of its digits, each
multiplied by its position (1 to 10), is divisible by 11. */

const ISBN_Number = prompt("Enter a ISBN number to check it is valid or not.");

function isISBNCorrect(ISBN) {
    if (ISBN) {
        if (ISBN.toString().length === 10) {
            let ISBN_Arr = [];
            for(let i = 0; i < ISBN.length; i++) {
                if (!isNaN(ISBN[i]) || ISBN[ISBN.length - 1] === "X") {
                    ISBN_Arr[ISBN_Arr.length] = ISBN[i] !== "X" ? Number(ISBN[i]) : 10;
                } else {
                    return `'${ISBN[i]}' is not a number!`;
                }
            }
    
            let sumOfDigits = 0;
            for (let i = 0; i < ISBN_Arr.length; i++) {
                sumOfDigits += ISBN_Arr[i] * (i + 1);
            }
    
            if (sumOfDigits % 11 === 0) {
                return `🟢 ${ISBN} is a valid ISBN number.`;
            }
            return `${ISBN} is a invalid ISBN number!!!`;
        } else {
            return "Error: Your ISBN number is incorrect, because it's not equal to 10 digits.";
        }
    }
    return `Error: Input field is blank, provide a 10 digit number.`;
}

const ans = isISBNCorrect(ISBN_Number); // answer

if (ans.startsWith("Error")) {
    console.error(ans);
} else {
    console.log(ans);
}
