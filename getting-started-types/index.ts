interface MyObj {
  foo: string
}

function func(obj: MyObj): void {
  console.log(obj)
}

func({foo: 'foo', bar: 3})
func({foo: 'foo'})
