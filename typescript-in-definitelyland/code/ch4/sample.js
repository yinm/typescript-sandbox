"use strict";
let v1 = 'a';
if (typeof v1 === 'string') {
    let f = () => {
        // console.log(v1.toUpperCase())
    };
    f();
    v1 = 1;
    f();
}
const v2 = null;
if (typeof v2 === 'string') {
    let f = () => {
        console.log(v2.toUpperCase());
    };
    f();
}
