interface MyObj {
  foo: string
  bar?: number
}

let obj: MyObj = {
  foo: 'string'
}

function func(obj: MyObj): number {
  return obj.bar != null ? obj.bar * 100 : 0
}

console.log(func(obj))
