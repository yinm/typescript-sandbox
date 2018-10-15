"use strict";
function func(obj) {
    console.log(obj.baz);
    if (obj.type === 'hoge') {
        console.log(obj.foo);
    }
    else {
        console.log(obj.bar);
    }
}
func({ type: 'hoge', foo: 'foooooo', baz: true });
func({ type: 'piyo', bar: 20, baz: false });
