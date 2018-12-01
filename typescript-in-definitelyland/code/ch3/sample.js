"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let clazz;
class Sample {
}
clazz = Sample;
let obj = new clazz();
exports.obj = obj;
clazz = class {
};
exports.obj = obj = new clazz();
