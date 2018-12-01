"use strict";
let obj;
obj = (word) => {
    if (typeof word === 'string') {
        return `Hello ${word}`;
    }
    else {
        return 42;
    }
};
let str = obj('TypeScript');
console.log(str);
let num = obj();
console.log(num);
