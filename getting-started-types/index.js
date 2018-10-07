"use strict";
function map(obj, f) {
    if (obj.type === 'Some') {
        return {
            type: 'Some',
            value: f(obj.value),
        };
    }
    else {
        return {
            type: 'None'
        };
    }
}
