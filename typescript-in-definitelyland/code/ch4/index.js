"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Node {
    isStringNode() {
        return this instanceof StringNode;
    }
    isNumberNode() {
        return this instanceof NumberNode;
    }
}
class StringNode extends Node {
    constructor(text) {
        super();
        this.text = text;
    }
}
class NumberNode extends Node {
    constructor(value) {
        super();
        this.value = value;
    }
}
let nodes = [new StringNode('TypeScript'), new NumberNode(8)];
nodes.forEach(n => {
    if (n.isStringNode()) {
        console.log(n.text);
    }
    else if (n.isNumberNode()) {
        console.log(n.value);
    }
});
