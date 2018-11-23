"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let obj;
obj = {
    hello(word) {
        return `Hello, ${word}`;
    }
};
obj = {
    hello: (word) => `Hello, ${word}`
};
obj = {
    hello: function (word) {
        return `Hello, ${word}`;
    }
};
let obj2;
obj2 = obj;
obj = obj2;
