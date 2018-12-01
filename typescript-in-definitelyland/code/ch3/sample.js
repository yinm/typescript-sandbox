"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let obj = {
    str: 'string',
    num: 1,
};
let str = obj['str'];
exports.str = str;
let num = obj['num'];
exports.num = num;
// let any = obj['notExists']
let propertyName1 = 'str';
exports.propertyName1 = propertyName1;
// let str2 = obj[propertyName1]
const propertyName2 = 'str';
exports.propertyName2 = propertyName2;
let str3 = obj[propertyName2];
exports.str3 = str3;
