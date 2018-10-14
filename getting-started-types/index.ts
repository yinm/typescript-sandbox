interface Hoge {
  foo: string
  bar: number
}
interface Piyo {
  foo: number
  baz: boolean
}

function useHogePiyo(obj: Hoge | Piyo): void {
  if ('bar' in obj) {
    console.log('Hoge', obj.bar)
  } else {
    console.log('Piyo', obj.baz)
  }
}

const obj: Hoge | Piyo = {
  foo: 123,
  bar: 'bar',
  baz: true
}
useHogePiyo(obj)
