"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var assert = require("power-assert");
var lib_1 = require("../lib/");
describe('lib', function () {
    describe('hello function', function () {
        it('generate string with default value', function () {
            var str = lib_1.hello();
            assert(str === 'Hello, TypeScript');
        });
        it('geneerate string with parameter', function () {
            var str = lib_1.hello('JavaScript');
            assert(str === 'Hello, JavaScript');
        });
    });
});
