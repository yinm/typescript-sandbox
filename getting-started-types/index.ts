function func(value: string | null): number {
  return value != null && value.length || 0
}

console.log(func('foo'))
console.log(func(null))
