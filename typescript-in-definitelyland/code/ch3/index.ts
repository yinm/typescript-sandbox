class Base {
  constructor(public str: string) {}
}

class InheritA extends Base {
  constructor(public num: number) {
    super('TypeScript')
  }
}

class InheritB extends Base {
  constructor(public bool: boolean) {
    super('TypeScript')
  }
}

let obj: Base = new InheritA(1)

if (obj instanceof InheritA) {
  obj.num
} else if (obj instanceof InheritB) {
  obj.bool
} else {
  obj.str
}

export { }
