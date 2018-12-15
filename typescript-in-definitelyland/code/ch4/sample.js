"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function mixinStorage(base) {
    let modified = base;
    modified.$save = () => {
        console.log(`データを保存しました！ ${JSON.stringify(base)}`);
    };
    return modified;
}
let base = {
    name: 'TypeScript'
};
let obj = mixinStorage(base);
obj.$save();
obj.name = 'JavaScript';
obj.$save();
