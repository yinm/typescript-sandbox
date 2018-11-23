"use strict";
function printPoint(p) {
    let message = `x=${p.x}, y=${p.y}`;
    if (p.color) {
        message = `${p.color}(${message})`;
    }
    console.log(message);
}
printPoint({
    x: 1,
    y: 2
});
printPoint({
    x: 1,
    y: 2,
    color: 'red'
});
printPoint({
    x: 1,
    y: 2,
});
