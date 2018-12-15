class Sample {
  constructor(public bye: typeof Sample.prototype.hello) {}
  hello = (word = 'TypeScript') => `Hello, ${word}`
}

let obj = new Sample((word = 'TypeScript') => `Hello, ${word}`)
obj.bye = obj.hello

export { }
