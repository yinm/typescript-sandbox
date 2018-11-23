let objA: {
  [index: number]: string;
} = {}

let s1 = objA[1]
// let s2 = objA['test']

let objB: {
  [index: string]: string
} = {}

let s3 = objB[1]
let s4 = objB['test']

objA = {
  0: 'str',
  // str: 'str'
}

let tmp = {
  0: 'str',
  str: 'str'
}
objA = tmp

objB = {
  0: 'str',
  str: 'str',
  // num: 1
}

export { s1, s3, s4 }
