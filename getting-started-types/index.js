"use strict";
var a = function (arg) { console.log(arg); };
var b = a;
a({ foo: 'aaaaaaaa' });
b({ foo: 'aaaaaaaa', bar: 10 });
