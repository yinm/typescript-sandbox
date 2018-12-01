"use strict";
class PointImpl1 {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}
class PointImpl2 {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}
function double(p) {
    return {
        x: p.x * 2,
        y: p.y * 2
    };
}
double(new PointImpl1(1, 2));
double(new PointImpl2(3, 4));
double({
    x: 5,
    y: 6
});
