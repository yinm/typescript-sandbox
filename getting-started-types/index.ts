const func = (...args: string[]) => args[0]

const strings: string[] = ['foo', 'bar', 'baz']

console.log(func(...strings))
