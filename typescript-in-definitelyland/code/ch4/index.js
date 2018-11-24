"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let obj = null;
typeof obj === 'string' && obj.charAt(0);
// typeof obj === 'number' && obj.charAt(0)
if (typeof obj === 'string' || typeof obj === 'boolean') {
    // string | boolean
}
else {
    // number
}
typeof obj === 'string' ? obj.charAt(0) : obj;
if (typeof obj === 'string') {
    obj.charAt(0);
}
else {
    obj;
}
if (!(typeof obj !== 'string')) {
    obj.charAt(0);
}
