"use strict";
function func(obj) {
    return obj.bar != null ? obj.bar * 100 : 0;
}
console.log(func({ foo: 'aa', bar: 10 }));
console.log(func({ foo: 'aa' }));
