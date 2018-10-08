function identity<T>(value: T): T {
  return value
}

const value = identity(5)
const str: string = value
const num: number = value
const yes5: 5 = value
const no5: 4 = value
