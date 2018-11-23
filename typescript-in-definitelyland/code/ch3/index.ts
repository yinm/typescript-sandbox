class Base {
  constructor(public str: string) {}
}

class InheritA extends Base {
  constructor(public num: number) {
    super('TypeScript')
  }
}

interface Sample<T extends Base> {
  method(): T
}

let objA: Sample<InheritA>

// let objB: Sample<RegExp>

let objC: Sample<{ str: string }>

interface Service<T> {
  service(t: T): T;
}

function f<T extends Service<T>>(x: T) {
  return x.service(x)
}

export { Base, InheritA, Sample, objA, objC, Service, f }
