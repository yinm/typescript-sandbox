"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function asyncModoki(callback) {
    callback('TypeScript');
}
asyncModoki((value => console.log(`Hello, ${value}`)));
asyncModoki((value) => console.log(`Hello, ${value}`));
