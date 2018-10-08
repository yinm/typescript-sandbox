function func<T>(obj: T): void {
  console.log(obj)
}

const f: <T>(obj: T) => void = func
f<number>(4)
