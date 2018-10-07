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
func({ type: 'hoge', foo: 'aaa', baz: true });
func({ type: 'piyo', bar: 1, baz: true });
