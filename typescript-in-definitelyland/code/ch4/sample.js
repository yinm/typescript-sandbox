"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function upperAll(words) {
    if (typeof words === 'string') {
        words = [words];
    }
    return words.map(word => word.toUpperCase());
}
console.log(upperAll('TypeScript'));
console.log(upperAll(['TypeScript', 'JavaScript']));
