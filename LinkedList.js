import Node from "./Node";

class LinkedList {
	constructor() {
		this._head = undefined;
		this._tail = undefined;
		this._size = 0;
	}

	size() {
		return this._size;
	}
}