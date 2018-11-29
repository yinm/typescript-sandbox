// 3rd
function returnByPromise(word: string) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(word)
    }, 100)
  })
}

async function helloAsync(): Promise<string> {
  console.log('A')
  const word = await returnByPromise('TypeScript')
  console.log(word)
  console.log('B')

  return `Hello, ${word}`
}

(async () => {
  const hello = await helloAsync()
  console.log(hello)
})()

helloAsync().then(hello => console.log(hello))

export { }
