"use strict";
function bind(func, value) {
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return func.apply(void 0, [value].concat(args));
    };
}
var add = function (x, y) { return x + y; };
var add1 = bind(add, 1);
console.log(add1(5));
console.log(add1(5));
add1('foo');
