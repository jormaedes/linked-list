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
			return ;
		}
		this._tail.next = node;
		this._tail = node;
		this._size++;
	}
}