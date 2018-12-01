let obj: {
  (word: string): string
  (): number
}

obj = (word?: string): any => {
  if (typeof word === 'string') {
    return `Hello ${word}`
  } else {
    return 42
  }
}

let str = obj('TypeScript')
console.log(str)

let num = obj()
console.log(num)
