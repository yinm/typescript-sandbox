"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let config = {
    verbose: true
};
let defaultConfig = { filePath: 'settings.json', verbose: false };
let filled = Object.assign({}, defaultConfig, config);
let fixed = filled;
exports.fixed = fixed;
console.log(fixed);
