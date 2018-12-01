let obj: {
  (word: string): string
}

obj = word => `Hello, ${word}`
obj = (word: string): string => {
  return `Hello, ${word}`
}
obj = function(word: string): string {
  return `Hello, ${word}`
}

let str = obj('TypeScript')
console.log(str)

export { }
