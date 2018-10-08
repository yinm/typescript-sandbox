interface MyFoo {
  method: () => void
}

class Foo {
  method(): void {
    console.log('Hello world')
  }
}

const obj: MyFoo = new Foo()
const obj2: Foo = obj
