class Sample {
  hello = (word = 'TypeScrippt') => `Hello, ${word}`
  bye: typeof Sample.prototype.hello
}

let obj = new Sample()
obj.bye = obj.hello

export { }
