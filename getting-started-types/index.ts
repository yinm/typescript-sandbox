function func(arg: string): number {
  return Number(arg)
}

const f: (foo: string) => number = func
