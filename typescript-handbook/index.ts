interface Lengthwise {
  length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
  console.log(arg.length)
  return arg
}

// loggingIdentity(3)
loggingIdentity({ length: 10, value: 3 })
