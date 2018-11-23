"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let obj;
obj = word => `Hello, ${word}`;
obj = (word) => {
    return `Hello, ${word}`;
};
obj = function (word) {
    return `Hello, ${word}`;
};
let str = obj('TypeScript');
console.log(str);
