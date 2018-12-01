// 2nd
let func: (value: string) => string

func = word => `Hello, ${word}`
func = (word: string) => {
  return `Hello, ${word}`
}
func = function(word: string) {
  return `Hello, ${word}`
}

func = () => 'Hello, TypeScript'

func = (v1: string, v2 = 'JavaScript') => `Hello, ${v1} & ${v2}`
