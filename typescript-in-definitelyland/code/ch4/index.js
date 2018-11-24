"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function upperA(word) {
    // word.toUpperCase()
    if (word == null) {
        word = 'TypeScript';
    }
    console.log(word.toUpperCase());
}
exports.upperA = upperA;
function upperB(word) {
    word = word || 'TypeScript';
    console.log(word.toUpperCase());
}
exports.upperB = upperB;
function upperC(word = 'TypeScript') {
    console.log(word.toUpperCase());
}
exports.upperC = upperC;
