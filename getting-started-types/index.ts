interface MyObj {
  foo: string
}

function func(obj: MyObj): void {}

func({ foo: 'foo', bar: 3 })
