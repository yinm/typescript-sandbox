"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Base {
    constructor(str) {
        this.str = str;
    }
}
class InheritA extends Base {
    constructor(num) {
        super('TypeScript');
        this.num = num;
    }
}
class InheritB extends Base {
    constructor(bool) {
        super('TypeScript');
        this.bool = bool;
    }
}
let obj = new InheritA(1);
if (obj instanceof InheritA) {
    obj.num;
}
else if (obj instanceof InheritB) {
    obj.bool;
}
else {
    obj.str;
}
