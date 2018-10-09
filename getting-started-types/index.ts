interface MyObj {
  foo: string
  bar: number
}

interface MyObj2 {
  foo: string
}

const a: MyObj = { foo: 'foo', bar: 3 }
const b: MyObj2 = a
