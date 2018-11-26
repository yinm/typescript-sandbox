const foo = {
  str: 'aa',
  num: 1
}

declare module 'foo' {
  let str: string
}

declare module 'foo' {
  let num: number
}

