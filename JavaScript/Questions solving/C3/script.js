function findDuplicates(arr) {
    let n = arr.length;
    
    if(n === 0 || n === 1) return [];
    
    const obj = {};
    let newArr = [];
    
    for(let i = 0; i < n; i++) {
        if(arr[i] in obj) {
            obj[arr[i]]++;
        } else {
            obj[arr[i]] = 1;
        }
    }
    console.log(obj);
    
    // for(let key in obj) {
    //     if(obj[key] > 1) {
    //         newArr[newArr.length] = key;
    //     }
    // }
    
    return newArr;
}

let ans = findDuplicates([2, 4, 5, 5, 3, 0, 1]);
console.log(ans);
