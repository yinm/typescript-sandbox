"use strict";
exports.__esModule = true;
var objA;
var objB;
objA = new Date();
console.log(objA);
objA = null;
// objA = null as any
objB = new Date();
objB = null;
objB = void 0;
// objB.getTime()
objB.getTime();
