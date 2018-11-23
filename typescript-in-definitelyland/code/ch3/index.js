"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let objA = {
    str: 'TypeScript'
};
// objA.str = 'JavaScript'
let objB = {
    str: 'Mutable'
};
objA = objB;
console.log(objA.str);
objB.str = 'Modified!';
console.log(objA.str);
