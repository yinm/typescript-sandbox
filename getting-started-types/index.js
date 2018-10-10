"use strict";
var func = function (foo) {
    var bar = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        bar[_i - 1] = arguments[_i];
    }
    return bar;
};
func('foo');
func('bar', 1, 2, 3);
func('bar', 'hey', 2, 3);
