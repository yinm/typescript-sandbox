"use strict";
var func = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args[0];
};
var strings = ['foo', 'bar', 'baz'];
func.apply(void 0, strings);
