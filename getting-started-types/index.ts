interface MyObj {
  foo: string
  bar?: number
}

function func(obj: MyObj): number {
  return obj.bar != null ? obj.bar * 100 : 0
}

console.log(func({foo: 'aa', bar: 10}))
console.log(func({foo: 'aa'}))
