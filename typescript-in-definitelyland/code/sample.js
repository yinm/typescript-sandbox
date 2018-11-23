"use strict";
class Base {
    constructor() {
        this.a = 'a';
        this.b = 'b';
        this.c = 'c';
        this.d = 'd';
    }
    method() {
        this.d;
    }
}
class Inherit extends Base {
    method() {
        this.a;
        this.b;
        this.c;
        // this.d
    }
}
const base = new Base();
base.a;
base.b;
// base.c
// base.d
