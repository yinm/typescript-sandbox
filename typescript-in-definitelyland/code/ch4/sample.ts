class Sample {
  constructor(public str: string) {}
}

let obj: Sample = {
  str: 'Hi!'
}

if (obj instanceof Sample) {
  console.log(obj.str)
}

export { }
