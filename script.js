let n = 5;

let sum = 0;
function sumFunc() {
    if (n > 0) {
        sum += n--;
        sumFunc();
        return sum
    } else return sum;
}

console.log(sumFunc())