import Node from "./Node.js";

export default class LinkedList {
	constructor() {
		this._head = undefined;
		this._tail = undefined;
		this._size = 0;
	}

	size() {
		return this._size;
	}

	head() {
		return this._head;
	}

	tail() {
		return this._tail;
	}

	append(value) {
		const node = new Node(value);
		if (this._head == undefined) {
			this._head = node;
			this._tail = node;
			this._size++;
			return;
		}
		this._tail.next = node;
		this._tail = node;
		this._size++;
	}

	prepend(value) {
		const node = new Node(value);
		if (this._head == undefined) {
			this._head = node;
			this._tail = node;
			this._size++;
			return;
		}
		node.next = this._head;
		this._head = node;
		this._size++;
	}

	pop() {
		if (this._size == 0) return;
		let head = this._head;
		if (this._size == 1) {
			this._head = undefined;
			this._tail = undefined;
			this._size--;
			return (head);
		}
		let next = head.next;
		while (next.next) {
			head = head.next;
			next = next.next;
		}
		head.next = undefined;
		this._tail = head;
		this._size--;
		return (next);
	}

	at(index) {
		if (index < 0 || index >= this._size)
			return undefined;
		let head = this._head;
		for (let i = 0; i < this._size; i++) {
			if (i == index) return head;
			head = head.next;
		}
	}

	contains(value) {
		let head = this._head;
		while (head) {
			if (head.value === value) return true;
			head = head.next;
		}
		return false;
	}

	findIndex(value) {
		let head = this._head;
		for (let i = 0; i < this._size; i++) {
			if (head.value === value) return i;
			head = head.next;
		}
		return -1;
	}

	toString() {
		let head = this._head;
		let str = "";
		while (head) {
			str += `( ${head.value} ) -> `;
			head = head.next;
		}
		str += " null";
		return (str);
	}

	insertAt(index, ...values)
	{
		if (index < 0 || index > this._size)
			throw RangeError("RangeError");
		let nodeBefore = this.at(index - 1);
		let nodeCurrent = this.at(index);
		let i = 0;
		if (!nodeBefore)
		{
			nodeBefore = new Node(values[i]);
			this._head = nodeBefore;
			this._size++;
			i++;
		}
		for(; i < values.length; i++) {
			nodeBefore.next = new Node(values[i]);
			nodeBefore = nodeBefore.next;
			this._size++;
		}
		nodeBefore.next = nodeCurrent;
		if (!nodeCurrent)
			this._tail = nodeBefore;
	}
}
