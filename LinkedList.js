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

	prepend(value){
		const node = new Node(value);
		if (this._head == undefined) {
			this._head = node;
			this._tail = node;
			this._size++;
			return ;
		}
		node.next = this._head;
		this._head = node;
		this._size++;
	}

	pop() {
		if (this._size == 0) return;
		let head = this._head;
		if (this._size == 1)
		{
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
}
