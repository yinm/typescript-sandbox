"use strict";
function func(value) {
    return value != null && value.length || 0;
}
console.log(func('foo'));
console.log(func(null));
