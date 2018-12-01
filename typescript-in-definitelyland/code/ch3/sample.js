"use strict";
class AImpl {
    constructor(str) {
        this.str = str;
    }
}
let objA = new AImpl('string');
let objB = {
    str: 'string',
    num: 42
};
class FooClass {
    constructor(num) {
        this.num = num;
    }
}
let objC = {
    num: 42,
    str: 'string'
};
