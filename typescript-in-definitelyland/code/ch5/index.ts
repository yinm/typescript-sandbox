function testA(this: string) {
  console.log(this.toUpperCase())
}
testA.bind('TypeScript')()

function testB() {
  console.log(this.toUpperCase())
}

export { testB }
