"use strict";
var func = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args[1];
};
var v = func('foo', 3, true);
