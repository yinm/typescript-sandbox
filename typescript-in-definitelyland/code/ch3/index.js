"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SampleA {
    constructor(data) {
        this.data = data;
    }
}
exports.SampleA = SampleA;
let objA = new SampleA('str');
exports.objA = objA;
let objB = { data: 1 };
exports.objB = objB;
let obj;
exports.obj = obj;
let func;
func = (array) => array[0];
func([1, 2, 3]);
let ctor;
ctor = SampleA;
new ctor('str');
let objC = { data: 1 };
exports.objC = objC;
