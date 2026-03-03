import LinkedList from "./LinkedList.js";

const log = (label, value) =>
	console.log(`${label}:`, value);

const section = (title) =>
	console.log(`\n${"=".repeat(40)}\n  ${title}\n${"=".repeat(40)}`);

// ─── append & toString ────────────────────────────
section("append + toString");
const list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.append(4);
log("toString", list.toString());
// ( 1 ) -> ( 2 ) -> ( 3 ) -> ( 4 ) ->  undefined

// ─── size, head, tail ─────────────────────────────
section("size / head / tail");
log("size", list.size());        // 4
log("head", list.head().value);  // 1
log("tail", list.tail().value);  // 4

// ─── prepend ──────────────────────────────────────
section("prepend");
list.prepend(0);
log("toString", list.toString());
// ( 0 ) -> ( 1 ) -> ( 2 ) -> ( 3 ) -> ( 4 ) ->  undefined
log("head", list.head().value);  // 0
log("size", list.size());        // 5

// ─── at ───────────────────────────────────────────
section("at");
log("at(0)", list.at(0).value);        // 0
log("at(2)", list.at(2).value);        // 2
log("at(4)", list.at(4).value);        // 4
log("at(-1)", list.at(-1));            // undefined
log("at(99)", list.at(99));            // undefined

// ─── contains ─────────────────────────────────────
section("contains");
log("contains(3)", list.contains(3));  // true
log("contains(9)", list.contains(9));  // false

// ─── findIndex ────────────────────────────────────
section("findIndex");
log("findIndex(0)", list.findIndex(0));  // 0
log("findIndex(4)", list.findIndex(4));  // 4
log("findIndex(9)", list.findIndex(9));  // -1

// ─── pop ──────────────────────────────────────────
section("pop");
const popped = list.pop();
log("popped", popped.value);     // 4
log("toString", list.toString());
log("tail", list.tail().value);  // 3
log("size", list.size());        // 4

// ─── insertAt (índice intermediário) ──────────────
section("insertAt - índice intermediário");
list.insertAt(2, 99);
log("insertAt(2, 99)", list.toString());
// ( 0 ) -> ( 1 ) -> ( 99 ) -> ( 2 ) -> ( 3 ) ->  undefined
log("size", list.size());  // 5

// ─── insertAt (múltiplos valores) ─────────────────
section("insertAt - múltiplos valores");
list.insertAt(1, 10, 20, 30);
log("insertAt(1, 10, 20, 30)", list.toString());
log("size", list.size());  // 8

// ─── insertAt (índice 0) ──────────────────────────
section("insertAt - índice 0");
list.insertAt(0, -1);
log("insertAt(0, -1)", list.toString());
log("head", list.head().value);  // -1
log("size", list.size());        // 9

// ─── insertAt (fim da lista) ──────────────────────
section("insertAt - fim da lista");
list.insertAt(list.size(), 999);
log("insertAt(size, 999)", list.toString());
log("tail", list.tail().value);  // 999
log("size", list.size());        // 10

// ─── insertAt (fora dos limites) ──────────────────
section("insertAt - RangeError");
try {
	list.insertAt(999, 0);
} catch (e) {
	log("insertAt(999)", e instanceof RangeError ? "RangeError ✅" : e);
}

// ─── removeAt (índice intermediário) ──────────────
section("removeAt - índice intermediário");
log("antes", list.toString());
list.removeAt(2);
log("removeAt(2)", list.toString());
log("size", list.size());  // 9

// ─── removeAt (índice 0 / head) ───────────────────
section("removeAt - head");
list.removeAt(0);
log("removeAt(0)", list.toString());
log("head", list.head().value);
log("size", list.size());

// ─── removeAt (último / tail) ─────────────────────
section("removeAt - tail");
list.removeAt(list.size() - 1);
log("removeAt(last)", list.toString());
log("tail", list.tail().value);
log("size", list.size());

// ─── removeAt (fora dos limites) ──────────────────
section("removeAt - RangeError");
try {
	list.removeAt(999);
} catch (e) {
	log("removeAt(999)", e instanceof RangeError ? "RangeError ✅" : e);
}

// ─── lista com 1 elemento ─────────────────────────
section("lista com 1 elemento");
const single = new LinkedList();
single.append(42);
log("toString", single.toString());
log("head", single.head().value);  // 42
log("tail", single.tail().value);  // 42
log("size", single.size());        // 1
const p = single.pop();
log("pop", p.value);               // 42
log("head após pop", single.head());  // undefined
log("tail após pop", single.tail());  // undefined
log("size após pop", single.size());  // 0