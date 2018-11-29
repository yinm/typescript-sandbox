class BaseA {
  constructor(public str: string) {}
}

class BaseB {
  str: string
  constructor(str: string) {
    this.str = str
  }
}

export { BaseA, BaseB }
