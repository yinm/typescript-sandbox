declare function readFileA(
  filePath: string,
  listener: (data: string) => void
): void

declare function readFileB(
  filePath: string,
  listener: (data?: string) => void
): void

readFileA('./test.txt', data => {
  console.log(data.toUpperCase())
})

readFileB('./test.txt', data => {
  if (!data) {
    data = 'not found'
  }
  console.log(data.toUpperCase())
})

readFileA('./test.txt', () => {
  console.log('done')
})
readFileB('./test.txt', () => {
  console.log('done')
})
