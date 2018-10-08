"use strict";
var Foo = /** @class */ (function () {
    function Foo() {
    }
    Foo.prototype.method = function () {
        console.log('Hello world');
    };
    return Foo;
}());
var obj = new Foo();
var obj2 = obj;
