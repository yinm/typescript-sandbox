function identity<T>(value: T): T {
  return value
}

const value = identity(3)
const str: string = value
