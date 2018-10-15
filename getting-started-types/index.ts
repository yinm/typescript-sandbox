function func(): never {
  throw new Error('Hi')
}

const result: never = func()
