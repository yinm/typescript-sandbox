class A {
  _this!: this

  a(): this {
    return this
  }

  d(arg: this): this {
    return arg
  }

  e() {
    return this
  }
}

class B extends A {
  b() {
    console.log('B')
  }
}

interface C extends A {
  c(): void
}

new B().a().e().b()
new B().d(new B()).b()

// new B().d(new A()).b()

new B()._this.b()

let c: C = null as any
c.a().c()

export {}
