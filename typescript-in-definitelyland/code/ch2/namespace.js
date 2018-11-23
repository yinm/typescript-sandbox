"use strict";
var a;
(function (a) {
    class Sample {
    }
    a.Sample = Sample;
})(a || (a = {}));
var b;
(function (b) {
    b.objA = new a.Sample();
    var Sample = a.Sample;
    b.objB = new Sample();
    var Test = a.Sample;
    b.objC = new Sample();
    b.objA = new Test();
})(b || (b = {}));
console.log(b.objA);
console.log(b.objB);
console.log(b.objC);
