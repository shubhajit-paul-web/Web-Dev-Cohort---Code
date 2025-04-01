// [10, 5, 9, 1, 4, 6, 8]

function insertionSort(arr = []) {
	const n = arr.length;

	for (let i = 1; i < n; i++) {
		let currentIdx = i;
		let j = i - 1;

		while (j >= 0 && arr[j] > arr[currentIdx]) {
			[arr[j], arr[currentIdx]] = [arr[currentIdx], arr[j]];
			currentIdx = j;
			j--;
		}
	}

	return arr;
}

// console.log(insertionSort([10, 5, 9, 1, 4, 6, 2, 8]));

const prompt = require("prompt-sync")();
const arrSize = Number(prompt("Enter a array size: "));

// [[, , ,], [, , ,], [, , ,]]
if (arrSize) {
	let arr = new Array(arrSize);

	for (let i = 0; i < arrSize; i++) {
		arr[i] = new Array(arrSize);

		for (let j = 0; j < arr[i].length; j++) {
			arr[i][j] = new Array(arrSize);

			for (let k = 0; k < arr[i][j].length; k++) {
				// const arrElem = Number(prompt(`Row ${i}:${j} Enter array element ${j}: `));
				arr[i][j][k] = Math.floor(Math.random() * 11);
			}
		}
	}

	console.log(arr);
}

/* 
	3D Array:

	[
		[
			[1, 2],
			[3, 4],
		],
		[
			[5, 6],
			[7, 8],
		],
	];
*/
