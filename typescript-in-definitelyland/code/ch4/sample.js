"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class A {
    a() {
        return this;
    }
    d(arg) {
        return arg;
    }
    e() {
        return this;
    }
}
class B extends A {
    b() {
        console.log('B');
    }
}
new B().a().e().b();
new B().d(new B()).b();
// new B().d(new A()).b()
new B()._this.b();
let c = null;
c.a().c();
