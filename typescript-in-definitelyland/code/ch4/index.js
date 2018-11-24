"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const obj1 = {
    name: 'maya',
    greeting() {
        console.log(`Hello ${this.name}`);
        // console.log(`Hello, ${this.notExist}`)
    }
};
console.log(obj1.greeting());
const obj = {
    hello() {
        console.log(`Hello, ${this.name}`);
        // console.log(`Hello, ${this.notExist}`)
    }
};
obj.hello();
