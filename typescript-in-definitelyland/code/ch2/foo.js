"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 2nd
const bar_1 = require("./bar");
const bar2 = require("./bar");
const bar3 = require("./bar");
console.log(bar_1.hello());
console.log(bar_1.default());
console.log(bar2.hello());
console.log(bar2.default());
console.log(bar3.hello());
console.log(bar3.default());
const buzz = require("./buzz");
const buzz2 = require("./buzz");
console.log(buzz());
console.log(buzz2());
