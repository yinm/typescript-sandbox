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
if (obj instanceof Sample) {
    console.log(obj.str);
}
