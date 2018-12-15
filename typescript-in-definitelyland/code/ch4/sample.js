"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
let config = {};
config.filePath = 'settings.json';
config.verbose = false;
processA(config);
function processA(config = {}) {
    if (fs.existsSync(config.filePath)) {
        console.log(fs.readFileSync(config.filePath, 'utf8'));
    }
}
function processB(config = {}) {
    config.filePath = config.filePath || 'settings.json';
    config.verbose = config.verbose || false;
    if (fs.existsSync(config.filePath)) {
        console.log(fs.readFileSync(config.filePath, 'utf8'));
    }
    processA(config);
}
exports.processB = processB;
function processC(config = {}) {
    const fixed = {
        filePath: config.filePath || 'settings.json',
        verbose: config.verbose || false
    };
    if (fs.existsSync(fixed.filePath)) {
        console.log(fs.readFileSync(fixed.filePath, 'utf8'));
    }
}
exports.processC = processC;
