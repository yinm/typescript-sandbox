interface MyObj {
  readonly foo: string
}

const obj: MyObj = {
  foo: 'Hey!'
}

obj.foo = 'Hi'
