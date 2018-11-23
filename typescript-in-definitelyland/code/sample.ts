// 2nd
function asyncModoki(callback: (value: string) => void) {
  callback('TypeScript')
}

asyncModoki(value => console.log(`Hello, ${value}`))
asyncModoki((value: string): void => console.log(`Hello, ${value}`))

export { }
