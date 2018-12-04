"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Base {
    constructor(str) {
        this.str = str;
    }
}
exports.Base = Base;
class InheritA extends Base {
    constructor(num) {
        super('TS');
        this.num = num;
    }
}
exports.InheritA = InheritA;
let objA;
exports.objA = objA;
// let objB: Sample<RegExp>
let objC;
exports.objC = objC;
function f(x) {
    return x.service(x);
}
exports.f = f;
