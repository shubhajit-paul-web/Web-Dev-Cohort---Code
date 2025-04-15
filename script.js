function characterFrequency(str) {
    let obj = {}
    
    for(let i = 0; i < str.length; i++) {
        if(str[i].charCodeAt() !== 32) {
            if (obj.hasOwnProperty(obj[str[i]])) {
                obj[obj[str[i]]]++
            } else {
                obj[obj[str[i]]] = 1;
            }
        }
    }
    
    let arr = Object.keys(obj).sort();
    let obj2 = {}
    arr.forEach(function(key) {
        obj2[key] = obj[key] 
    });
    
    for(let key in obj2) {
        console.log(key)
    }
}

characterFrequency("hello")