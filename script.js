function bubbleSort(arr = []) {
	let n = arr.length;
	let swapped;

	for (let i = 0; i < n - 1; i++) {
		swapped = false;

		for (j = 0; j < n - i - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
				swapped = true;
			}
		}

		if (!swapped) break;
	}

	return arr;
}

console.log(bubbleSort([13, 46, 24, 52, 20, 9, 0, 8, 40, 5]));
