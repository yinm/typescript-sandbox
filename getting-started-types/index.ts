const func = (foo: string, ...bar: number[]) => bar

console.log(func('foo'))
console.log(func('bar', 1, 2, 3))
console.log(func('baz', 'hey', 2, 3))
