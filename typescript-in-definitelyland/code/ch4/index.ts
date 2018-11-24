function testA(this: string) {
  console.log(this.toUpperCase())
}

testA.bind('TypeScript')()
// testA()
// testA('TS')

function testB() {
  // console.log(this.toUpperCase())
}

function testC(this: string, postfix: string) {
  console.log(`${this.toUpperCase()}${postfix}`)
}
testC.bind('TypeScript')('!')

export { testB }
