type Args = [string, number, boolean]
const func = (...args: Args) => args[1]
const v = func('foo', 3, true)
