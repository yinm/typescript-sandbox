"use strict";
var func = function (foo) {
    var bar = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        bar[_i - 1] = arguments[_i];
    }
    return bar;
};
console.log(func('foo'));
console.log(func('bar', 1, 2, 3));
console.log(func('baz', 'hey', 2, 3));
