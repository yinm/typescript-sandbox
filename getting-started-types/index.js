"use strict";
var func = function (f) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return args[0];
};
var v1 = func('foo', 'bar');
var v2 = func('foo', 'bar', 1, 2, 3);
