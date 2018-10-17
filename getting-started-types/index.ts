interface MyObj {
  foo: string
  bar?: number
}

let obj: MyObj = {
  foo: 'string'
}

obj = {
  foo: 'foo',
  bar: 100
}
