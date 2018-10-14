type Args = [string, ...number[]]

const func = (f: string, ...args: Args) => args[0]

const v1 = func('foo', 'bar')
const v2 = func('foo', 'bar', 1, 2, 3)
