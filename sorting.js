// Selection Sort
function selectionSort(arr) {
	const array = arr.slice();
	for (let i = 0; i < array.length - 1; i++) {
		let minIndex = i;
		for (let j = i + 1; j < array.length; j++) {
			if (array[j] < array[minIndex]) {
				minIndex = j;
			}
		}
		const temp = array[i];
		array[i] = array[minIndex];
		array[minIndex] = temp;
	}
	return array;
}

const array = [3, 4, 5, 1, 8, 7, 11, 9];
const output = selectionSort(array);
console.log(output);
console.log(array);

// Bubble sort
function bubbleSort(arr) {
	const array = arr.slice();
	for (let i = 0; i < array.length - 1; i++) {
		for (let j = 0; j < array.length - 1 - i; j++) {
			if (array[j] > array[j + 1]) {
				const temp = array[j];
				array[j] = array[j + 1];
				array[j + 1] = temp;
			}
		}
	}
	return array;
}

const array = [3, 4, 5, 1, 8, 7, 11, 9];
const output = bubbleSort(array);
console.log(output);
console.log(array);

// Insertion sort
function insertionSort(arr) {
	const array = arr.slice();

	for (let i = 1; i < array.length; i++) {
		for (let j = i; j > 0; j--) {
			if (array[j] < array[j - 1]) {
				const temp = array[j];
				array[j] = array[j - 1];
				array[j - 1] = temp;
			}
		}
	}
	return array;
}

const array = [3, 4, 5, 1, 500, 80, 7, 11, 999, 2];
const output = insertionSort(array);
console.log(output);
console.log(array);
