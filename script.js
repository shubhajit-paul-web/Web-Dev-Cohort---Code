function transpose(matrix) {
	let row = matrix[0].length; // 3
	let col = matrix.length; // 2
	let arr = [];

	for (let i = 0; i < row; i++) {
		arr[arr.length] = [];
		for (let j = 0; j < col; j++) {
			arr[i][j] = 0;
		}
	}

	return arr;
}

const ans = transpose([
	[1, 2, 3],
	[4, 5, 6],
]);

// [
// 	[1, 4],
// 	[2, 5],
// 	[3, 6],
// ];

console.log(ans);