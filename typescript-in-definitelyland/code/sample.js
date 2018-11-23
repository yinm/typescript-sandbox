"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Base {
    constructor(str) {
        this.num = 1;
        this.str = str;
    }
    hello() {
        return `Hello, ${this.str}`;
    }
    get regExp() {
        if (!this.regExpOptional) {
            return new RegExp('test');
        }
        return this.regExpOptional;
    }
}
const base = new Base('world');
console.log(base.hello());
