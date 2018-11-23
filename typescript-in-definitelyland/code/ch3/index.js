"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function move(value, delta) {
    if (delta.dx) {
        value.x += delta.dx;
    }
    if (delta.dy) {
        value.y += delta.dy;
    }
    return value;
}
let result = move({ x: 1, y: 2 }, { dx: -2 });
console.log(JSON.stringify(result, null, 2));
