let a: string | boolean | undefined

a = 'str'
a = true
// a = 1

let b1: string | boolean | undefined
let b2: boolean | number | undefined

let c: typeof b1 | typeof b2

export { a, b1, b2, c }
