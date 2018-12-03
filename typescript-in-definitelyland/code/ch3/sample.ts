class Base {
  constructor(public str: string) {}
}

class InheritA extends Base {
  constructor(public num: number) {
    super('TS')
  }
}

class InheritB extends Base {
  constructor(public bool: boolean) {
    super('TS')
  }
}

let obj: Base = new InheritA(1)

// (obj as InheritA).num

if (obj instanceof InheritA) {
  obj.num
} else if (obj instanceof InheritB) {
  obj.bool
} else {
  obj.str
}

export { }
