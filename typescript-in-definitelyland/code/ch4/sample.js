"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function testA() {
    console.log(this.toUpperCase());
}
testA.bind('TypeScript')();
// testA()
// testA('TypeScript')
function testB() {
    // console.log(this.toUpperCase())
}
exports.testB = testB;
function testC(postfix) {
    console.log(`${this.toUpperCase()}${postfix}`);
}
testC.bind('TypeScript')('!');
