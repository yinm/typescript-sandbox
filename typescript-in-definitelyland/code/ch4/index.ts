{
  type Data = string | number
  let obj: Data = 1

  console.log(obj)
}

{
  type Data = number | Date
  let obj: Data = 1

  console.log(obj)
}

// let obj: Data

{
  class Foo { }
  enum Bar {
    a,
    b,
  }
  interface Buzz { }

  console.log(Foo, Bar.a, null as any as Buzz)
}

export { }
