"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Sample {
    constructor(bye) {
        this.bye = bye;
        this.hello = (word = 'TypeScript') => `Hello, ${word}`;
    }
}
let obj = new Sample((word = 'TypeScript') => `Hello, ${word}`);
obj.bye = obj.hello;
