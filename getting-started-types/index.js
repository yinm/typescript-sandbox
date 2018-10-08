"use strict";
var a = function (arg) { console.log(arg); };
var b = a;
a({ foo: 'tttttt' });
b({ foo: 'aaaabbbbb', bar: 3 });
