"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Sample {
    constructor(str) {
        this.str = str;
    }
}
let obj = {
    str: 'Hi!'
};
function isSample(s) {
    if (!s) {
        return false;
    }
    return typeof s.str === 'string';
}
if (isSample(obj)) {
    console.log(obj.str);
}
