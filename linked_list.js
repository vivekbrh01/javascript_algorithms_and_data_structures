// Linked list basic implimentation

class Node {
	constructor(data, next = null) {
		this.data = data;
		this.next = next;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
		this.size = 0;
	}

	// Insert first node
	insertFirst(data) {
		this.head = new Node(data, this.head);
		this.size++;
	}

	// Insert last node
	insertLast(data) {
		let node = new Node(data);
		let current;

		// If empty, make head
		if (!this.head) {
			this.head = node;
		} else {
			current = this.head;

			while (current.next) {
				current = current.next;
			}

			current.next = node;
		}

		this.size++;
	}

	// Insert at index
	insertAt(data, index) {
		// If index is out of range
		if (index > 0 && index > this.size) {
			return;
		}

		// If first index
		if (index === 0) {
			this.head = new Node(data, this.head);
		}

		const node = new Node(data);

		let current, previous;

		// Set current to first
		current = this.head;
		let count = 0;

		while (count < index) {
			previous = current; // Node before the index
			count++;
			current = current.next; // Node after the index
		}

		node.next = current;
		previous.next = node;
	}
	// Get at index
	getAt(index) {
		let current = this.head;
		let count = 0;

		while (current) {
			if (count == index) {
				console.log(current.data);
			}
			count++;
			current = current.next;
		}

		return null;
	}
	// Remove at index
	removeAt(index) {
		if (index > 0 && index > this.size) {
			return;
		}

		let current = this.head;
		let previous;
		let count = 0;

		// Remove first
		if (index === 0) {
			this.head = current.next;
		} else {
			while (count < index) {
				count++;
				previous = current;
				current = current.next;
			}

			previous.next = current.next;
		}

		this.size--;
	}
	// Clear list
	clearList() {
		this.head = null;
		this.size = 0;
	}
	// Print list data
	printListData() {
		let currentNode = this.head;

		while (currentNode) {
			console.log(currentNode.data);
			currentNode = currentNode.next;
		}
	}
}

const showListItems = new LinkedList();

showListItems.insertFirst(100);
showListItems.insertFirst(200);
showListItems.insertLast(300);
showListItems.insertAt(500, 3);

showListItems.clearList();

// showListItems.removeAt(3);

showListItems.printListData();

// showListItems.getAt(3);
