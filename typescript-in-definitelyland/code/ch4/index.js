"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Sample {
    constructor(str) {
        this.str = str;
    }
}
let obj;
exports.obj = obj;
let clazz;
exports.obj = obj = new Sample('TS');
clazz = Sample;
exports.obj = obj = new clazz('TS');
let alterClazz;
alterClazz = clazz;
clazz = alterClazz;
