"use strict";
var obj = {
    foo: 'string'
};
function func(obj) {
    return obj.bar != null ? obj.bar * 100 : 0;
}
console.log(func(obj));
