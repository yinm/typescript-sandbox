function func(value: string | null): number {
  if (value != null) {
    return value.length
  } else {
    return 0
  }
}

console.log(func('foo'))
console.log(func(null))
