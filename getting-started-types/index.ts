interface Hoge {
  foo: string
  bar: number
}

interface Piyo {
  foo: string
  baz: boolean
}

const obj: Hoge & Piyo = {
  foo: 'fooooo',
  bar: 3,
  baz: true
}
