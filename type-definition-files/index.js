"use strict";
var outer;
(function (outer) {
    var local = 1;
    outer.a = local;
    let inner;
    (function (inner) {
        inner.x = 10;
    })(inner = outer.inner || (outer.inner = {}));
})(outer || (outer = {}));
(function (outer) {
    var local = 2;
    outer.b = local;
    let inner;
    (function (inner) {
        inner.y = 20;
    })(inner = outer.inner || (outer.inner = {}));
})(outer || (outer = {}));
