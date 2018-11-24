"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let v1;
exports.v1 = v1;
exports.v1 = v1 = 'str';
if (typeof v1 === 'string') {
    let f = () => {
        if (typeof v1 === 'string') {
            console.log(v1.toUpperCase());
        }
    };
    f();
    exports.v1 = v1 = 1;
    f();
}
const v2 = null;
exports.v2 = v2;
if (typeof v2 === 'string') {
    let f = () => {
        console.log(v2.toUpperCase());
    };
    f();
}
