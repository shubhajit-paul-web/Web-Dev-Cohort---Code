function rotateElement(arr = []) {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i + 1] || arr[i + 1] === 0) {
			[arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
		}
	}

	return arr;
}

console.log(rotateElement([1, 2, 3, 4, 5]));
