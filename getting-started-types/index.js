"use strict";
function func(value) {
    if (value != null) {
        return value.length;
    }
    else {
        return 0;
    }
}
console.log(func('foo'));
console.log(func(null));
