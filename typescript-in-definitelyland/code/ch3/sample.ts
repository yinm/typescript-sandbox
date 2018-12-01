interface Foo {
  readonly str: string
}

let objA: Foo = {
  str: 'TypeScript'
}
// objA.str = 'JavaScript'

let objB = {
  str: 'Mutable'
}
objA = objB
console.log(objA.str)

objB.str = 'Modified'
console.log(objA.str)

export { }
