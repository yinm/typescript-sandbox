interface MyObj {
  foo: string
  bar: number
}

interface MyObj2 {
  foo: string
}

const a: (obj: MyObj2) => void = () => {}
const b: (obj: MyObj) => void = a
