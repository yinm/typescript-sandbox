"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class A {
    constructor(str) {
        this.str = str;
    }
}
class B {
    constructor(num) {
        this.num = num;
    }
}
class C extends A {
    constructor(bool) {
        super('TS');
        this.bool = bool;
    }
}
let obj = null;
if (obj instanceof A) {
    obj.str;
    if (obj instanceof C) {
        obj.bool;
    }
}
if (obj instanceof C) {
    obj.bool;
}
else {
    if (obj instanceof B) {
        obj.num;
    }
    else {
        obj.str;
    }
}
