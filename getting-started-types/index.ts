interface MyObj {
  readonly foo: string
}
interface MyObj2 {
  foo: string
}

const obj: MyObj = {foo: 'Hey!'}
const obj2: MyObj2 = obj

obj2.foo = 'Hi'
console.log(obj.foo)
