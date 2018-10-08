interface MyObj {
  foo: string
  bar: number
}

interface MyObj2 {
  foo: string
}

const a: (obj: MyObj2) => void = (arg) => { console.log(arg) }
const b: (obj: MyObj) => void = a

a({foo: 'tttttt'})
b({foo: 'aaaabbbbb', bar: 3})
