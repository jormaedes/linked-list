# Linked List

A JavaScript implementation of a **Linked List** data structure, built as part of [The Odin Project](https://www.theodinproject.com/lessons/javascript-linked-lists) curriculum.

## 📦 Structure

The project is composed of two classes:

- **`Node`** — represents each element of the list, holding a `value` and a `next` pointer
- **`LinkedList`** — manages the chain of nodes, exposing methods to manipulate the list

## 🚀 Usage

```javascript
import LinkedList from "./LinkedList.js";

const list = new LinkedList();

list.append(1);
list.append(2);
list.append(3);

console.log(list.toString());
// ( 1 ) -> ( 2 ) -> ( 3 ) ->  undefined
```

## 📖 API

### `append(value)`
Adds a new node with `value` at the **end** of the list.

### `prepend(value)`
Adds a new node with `value` at the **beginning** of the list.

### `pop()`
Removes and returns the **last** node of the list.

### `at(index)`
Returns the node at the given `index`, or `undefined` if out of bounds.

### `insertAt(index, ...values)`
Inserts one or more values starting at the given `index`.
Throws `RangeError` if the index is out of bounds.

### `removeAt(index)`
Removes the node at the given `index`.
Throws `RangeError` if the index is out of bounds.

### `contains(value)`
Returns `true` if the list contains a node with the given `value`, `false` otherwise.

### `findIndex(value)`
Returns the index of the first node with the given `value`, or `-1` if not found.

### `size()`
Returns the total number of nodes in the list.

### `head()`
Returns the first node of the list.

### `tail()`
Returns the last node of the list.

### `toString()`
Returns a string representation of the list in the format:
```
( value ) -> ( value ) ->  null
```

## 🛠️ Built With

- JavaScript (ES6 Modules)

## 📚 Reference

- [The Odin Project — Linked Lists](https://www.theodinproject.com/lessons/javascript-linked-lists)