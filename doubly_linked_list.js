class Node {
	constructor(data) {
		this.data = data;
		this.prev = null;
		this.next = null;
	}
}

class DoublyLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	push(data) {
		let node = new Node(data);
		if (!this.head) {
			this.head = node;
			this.tail = node;
		} else {
			let temp = this.tail;
			this.tail = node;
			node.prev = temp;
			temp.next = node;
		}
		this.length++;
		return this;
	}
}

let list = new DoublyLinkedList();

list.push(1);
list.push(2);
list.push(3);
console.log(list);
