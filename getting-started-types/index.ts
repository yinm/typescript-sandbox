function bind<T, U extends any[], R>(
  func: (arg1: T, ...rest: U) => R,
  value: T
): ((...args: U) => R) {
  return (...args: U) => func(value, ...args)
}

const add = (x: number, y: number) => x + y
const add1 = bind(add, 1)
console.log(add1(5))
console.log(add1(5))

add1('foo')
