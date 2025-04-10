let str = "Aa0DCGf";
let newStr = "";

for(let i = 0; i < str.length; i++) {
    let charCode = str.charCodeAt(i);

    if (typeof str[i] === "string") {
        if (charCode >= 65 && charCode <= 90) {
            newStr += String.fromCharCode(charCode + 32);
        } else if(charCode >= 97 && charCode <= 122) {
            newStr += String.fromCharCode(charCode - 32);
        }
    }
}

console.log(newStr);

