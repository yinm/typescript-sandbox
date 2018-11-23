"use strict";
var a;
(function (a) {
    class Sample {
        hello(word = 'TypeScript') {
            return `Hello, ${word}`;
        }
    }
    a.obj = new Sample();
})(a || (a = {}));
(function (a) {
    function bye(word = 'JavaScript') {
        return `Bye, ${word}`;
    }
    a.bye = bye;
    // let tmp = new Sample()
})(a || (a = {}));
var b;
(function (b) {
    let c;
    (function (c) {
        function hello() {
            return a.obj.hello();
        }
        c.hello = hello;
    })(c = b.c || (b.c = {}));
})(b || (b = {}));
var d;
(function (d) {
    var e;
    (function (e) {
        function hello() {
            return a.obj.hello();
        }
        e.hello = hello;
    })(e = d.e || (d.e = {}));
})(d || (d = {}));
console.log(b.c.hello());
console.log(d.e.hello());
