interface Foo {
  value: number | string
}

let foo: Foo = {
  value: 'TypeScript'
}

if (typeof foo.value === 'string') {
  foo.value.toUpperCase()
}

export { }
