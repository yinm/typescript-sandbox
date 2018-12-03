"use strict";
let strArray = ['a', 'b', 'c'];
let numArray = [1, 2, 3];
strArray.forEach(v => v.charAt(0));
numArray.forEach(v => v.toFixed(2));
strArray.forEach((v) => v.charAt(0));
numArray.forEach((v) => v.toFixed(0));
// strArray.forEach((v: RegExp) => v.test('str'))
