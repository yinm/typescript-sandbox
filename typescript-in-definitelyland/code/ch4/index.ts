class A {
  constructor(public str: string) {}
}
class B {
  constructor(public num: number) {}
}
class C extends A{
  constructor(public bool: boolean) {
    super('TS')
  }
}

let obj: A | B | C = null as any
if (obj instanceof A) {
  obj.str

  if (obj instanceof C) {
    obj.bool
  }
}

if (obj instanceof C) {
  obj.bool
} else {
  if (obj instanceof B) {
    obj.num
  } else {
    obj.str
  }
}

export { }
