interface Foo<S, T> {
  foo: S
  bar: T
}

const obj: Foo<number, string> = {
  foo: 3,
  bar: 'hi'
}
