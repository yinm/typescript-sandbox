"use strict";
function func(value) {
    if ('string' === typeof value) {
        return value.length;
    }
    else {
        return value;
    }
}
