interface Foo {
  value: number | string;
}

let foo: Foo = {
  value: 'TypeScript'
}

// foo.value.toUpperCase()

if (typeof foo.value === 'string') {
  foo.value.toUpperCase()
}

export { }
