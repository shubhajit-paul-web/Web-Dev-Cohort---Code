function arrayReverse(arr = []) {
    if (Array.isArray(arr)) {
        let j = arr.length - 1;
        for (let i = 0; i <= Math.floor((arr.length - 1) / 2); i++) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
            j--;
        }
        return arr;
    }
    return "Error: This is not an Array";
}

console.log(arrayReverse([10, 20, 30, 40, 50, 60, 70, 80]));
console.log(arrayReverse(["A", "B", "C"]));
console.log(arrayReverse('hello'));