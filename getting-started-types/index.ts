interface Hoge {
  foo: string
  bar: number
}

interface Piyo {
  foo: number
  baz: boolean
}

type HogePiyo = Hoge | Piyo

const obj: HogePiyo = {
  foo: 'hello',
  bar: 0
}

let obj2: HogePiyo = {
  foo: 1,
  baz: true
}
