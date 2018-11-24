let func: () => string

let b: (() => string) | (() => boolean)
let c: { (): string } | { (): boolean }

let d: (() => string)

export { func, b, c, d }
