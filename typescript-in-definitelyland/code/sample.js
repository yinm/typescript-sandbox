"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Base {
    greeting(name) {
        return `Hi, ${name}`;
    }
}
class Inherit extends Base {
    greeting(name) {
        return `${super.greeting(name)}. How are you?`;
    }
}
let obj = new Inherit();
console.log(obj.greeting('TypeScript'));
