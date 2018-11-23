"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let objA = {};
let s1 = objA[1];
exports.s1 = s1;
// let s2 = objA['test']
let objB = {};
let s3 = objB[1];
exports.s3 = s3;
let s4 = objB['test'];
exports.s4 = s4;
objA = {
    0: 'str',
};
let tmp = {
    0: 'str',
    str: 'str'
};
objA = tmp;
objB = {
    0: 'str',
    str: 'str',
};
