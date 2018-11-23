"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 3rd
function asyncModoki(callback) {
    callback('TypeScript');
}
asyncModoki(value => console.log(`Hello, ${value}`));
asyncModoki((value) => console.log(`Hello, ${value}`));
asyncModoki(function (value) { console.log(`Hello, ${value}`); });
