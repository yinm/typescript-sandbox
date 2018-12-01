interface FooOptions {
  fileName?: string
  checkBar?: boolean
}

let obj = {
  unknownOption: 1
}

let fooOpts: FooOptions = obj
