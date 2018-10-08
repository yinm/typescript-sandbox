const func = (foo: string, ...bar: number[]) => bar

console.log(func('aaa'))
console.log(func('bar', 1, 2, 3))
