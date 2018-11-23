let obj: {
  hello(word: string): string;
}

obj = {
  hello(word: string) {
    return `Hello, ${word}`
  }
}

obj = {
  hello: (word: string) => `Hello, ${word}`
}

obj = {
  hello: function(word: string) {
    return `Hello, ${word}`
  }
}

let obj2: {
  hello: (word: string) => string
}
obj2 = obj
obj = obj2

export { }
