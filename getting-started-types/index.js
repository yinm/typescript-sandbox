"use strict";
function map(obj, f) {
    switch (obj.type) {
        case 'Some':
            return {
                type: 'Some',
                value: f(obj.value)
            };
        case 'None':
            return {
                type: 'None'
            };
    }
}
