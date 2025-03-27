function findElement(arr, element) {
	let index = -1;

	for(let i = 0; i < arr.length; i++) {
		if (arr[i] === element) {
			index = i;
			break;
		}
	}

	return index;
}

console.log(findElement([1, 2, 3, 4, 5, 6, 7, 8], "Shubhajit")); // -1
console.log(findElement([1, 2, 3, 4, 5, 6, 7, 8], 4)); // 3

