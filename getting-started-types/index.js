"use strict";
var Foo = /** @class */ (function () {
    function Foo(obj) {
    }
    return Foo;
}());
var obj1 = new Foo('foo');
function func(obj) { console.log(obj); }
func(3);
