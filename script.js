let arr = [0, 1, 0, 1, 0, 0, 1, 0, 1];
//                         (i) 
// [0, 0, 0, 0, 0, 1, 1, 1, 1]
//                (j)

let j = 0; // 5
for(let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
        j++;
    }
}

console.log(arr);
