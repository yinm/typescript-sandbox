interface MyObj {
  foo: string
  bar: number
}

interface MyObj2 {
  foo: string
}

const b: MyObj2 = {
  foo: 'foo',
  bar: 3,
}

const c: MyObj2 = {
  foo: 'foo',
}
