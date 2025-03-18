const N = 5;

for(let i = N; i > 0; i--) {
    let spaceCount = N - i;
    let centerSpace = N - 2; // 5 - 2 = 3
    let stars = "";
    for(let j = 1; j <= (N*2)-1; j++) {
        // if (j <= spaceCount) {
        //     stars += "-";
        // } else {
        //     if (spaceCount === j) {
        //         stars += "* ";
                
        //     }
        // }
        if (i+j === N*2 || i === j) {
            stars += "* ";
        } else {
            stars += " ";
        }
    }
    console.log(stars);
    
}