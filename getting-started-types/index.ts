const func = (foo: string, ...bar: number[]) => bar

func('foo')
func('bar', 1, 2, 3)
func('bar', 'hey', 2, 3)
