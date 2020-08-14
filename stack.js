// Implementing Stack using an array
// Implementing a Stack which finds if a word is a palindrome

let letters = [];

let word = "racecar";
let rword = "";

// Puting words into stack
for (let i = 0; i < word.length; i++) {
	letters.push(word[i]);
}

// Pop off the stack in reverse order
for (let i = 0; i < word.length; i++) {
	rword += letters.pop();
}

if (rword === word) {
	console.log(word + " is a palindrome");
} else {
	console.log(word + " is not a palindrome");
}

// Implementing without using array

let Stack = function () {
	this.count = 0;
	this.storage = {};

	//Adds to the end of the stack
	this.push = function (value) {
		this.storage[this.count] = value;
		this.count++;
	};

	//Removes and returns the value at the end of the stack
	this.pop = function () {
		if (this.count === 0) {
			return undefined;
		}

		this.count--;
		let result = this.storage[this.count];
		delete this.storage[this.count];
		return result;
	};

	this.size = function () {
		return this.count;
	};

	this.peek = function () {
		return this.storage[this.count - 1];
	};
};

let myStack = new Stack();

myStack.push(1);
myStack.push(2);
myStack.push(3);
console.log(myStack.peek);
console.log(myStack.pop);
console.log(myStack.peek);
