function selectionSort(arr = []) {
	let n = arr.length;
	
	for(let i = 0; i < n-1; i++) {
		let smallestIdx = i; // first index of unsorted part

		for(let j = i+1; j < n; j++) {
			if (arr[j] < arr[smallestIdx]) {
				smallestIdx = j; // smallest element index of unsorted part
			}
		}

		if (smallestIdx !== i) {
			// swaping elements
			[arr[smallestIdx], arr[i]] = [arr[i], arr[smallestIdx]];
		}
	}

	return arr;
}

console.log(selectionSort([4, 1, 5, 2, 3, 0]));
// Step 0: [ 0, 1, 5, 2, 3, 4 ]
// Step 1: [ 0, 1, 5, 2, 3, 4 ]
// Step 2: [ 0, 1, 2, 5, 3, 4 ]
// Step 3: [ 0, 1, 2, 5, 3, 4 ]
// Step 4: [ 0, 1, 2, 3, 5, 4 ]
// Step 5: [ 0, 1, 2, 3, 4, 5 ]

// ----------------------------
// For strings sorting
// "Shubhajit Paul" -> first letter -> "S" -> unicode (65)