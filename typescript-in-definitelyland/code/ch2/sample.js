"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function hello(...args) {
    return `Hello ${args.join(' & ')}`;
}
console.log(hello('TS', 'JS'));
