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

useHogePiyo({foo: 0, baz: true})
