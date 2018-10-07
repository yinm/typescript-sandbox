interface Func {
  (arg: number): void
}

const f: Func = (arg: number) => { console.log(arg) }

f(2)
