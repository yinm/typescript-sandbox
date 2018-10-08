interface MyObj {
  foo: string
  bar: number
}

interface MyObj2 {
  foo: string
}

const a: (obj: MyObj2) => void = (arg) => { console.log(arg) }
const b: (obj: MyObj) => void = a

a({foo: 'aaaaaaaa'})
b({foo: 'aaaaaaaa', bar: 10})
