"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function hello(word) {
    return `Hello, ${word}`;
}
hello('TypeScript');
function bye(word) {
    return `Bye, ${word}`;
}
bye('TypeScript');
function hey(word) {
    return `Hey, ${word || 'TypeScript'}`;
}
hey();
function ahoy(word = 'TypeScript') {
    return `Ahoy! ${word}`;
}
ahoy();
