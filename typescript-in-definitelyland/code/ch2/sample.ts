function hello(word: string): string {
  return `Hello, ${word}`
}
hello('TypeScript')

function bye(word: string) {
  return `Bye, ${word}`
}
bye('TypeScript')

function hey(word?: string) {
  return `Hey, ${word || 'TypeScript'}`
}
hey()

function ahoy(word = 'TypeScript') {
  return `Ahoy! ${word}`
}
ahoy()

export { }
