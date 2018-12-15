"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
{
    let obj = 1;
    console.log(obj);
}
{
    let obj = 1;
    console.log(obj);
}
// let obj: Data
{
    class Foo {
    }
    let Bar;
    (function (Bar) {
        Bar[Bar["a"] = 0] = "a";
        Bar[Bar["b"] = 1] = "b";
    })(Bar || (Bar = {}));
    console.log(Foo, Bar.a, null);
}
