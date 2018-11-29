class Base {
  num = 1

  str: string

  regExpOptional?: RegExp

  constructor(str: string) {
    this.str = str
  }

  hello(): string {
    return `Hello, ${this.str}`
  }

  get regExp() {
    if (!this.regExpOptional) {
      return new RegExp('test')
    }

    return this.regExpOptional
  }
}

const base = new Base('world')
console.log(base.hello())

export { }
