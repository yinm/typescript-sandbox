"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert = require("power-assert");
const lib_1 = require("../lib/");
describe('lib', () => {
    describe('hello function', () => {
        it('generate string with default value', () => {
            let str = lib_1.hello();
            assert(str === 'Hello, TypeScript');
        });
        it('geneerate string with parameter', () => {
            let str = lib_1.hello('JavaScript');
            assert(str === 'Hello, JavaScript');
        });
    });
});
