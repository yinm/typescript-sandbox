"use strict";
function useHogePiyo(obj) {
    if ('bar' in obj) {
        console.log('Hoge', obj.bar);
    }
    else {
        console.log('Piyo', obj.baz);
    }
}
