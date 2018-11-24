const obj1 = {
  name: 'maya',
  greeting() {
    console.log(`Hello ${this.name}`)
    // console.log(`Hello, ${this.notExist}`)
  }
}
console.log(obj1.greeting())

interface A {
  name: string;
}
interface B {
  hello(): void;
}

const obj: B & ThisType<A> = {
  hello() {
    console.log(`Hello, ${this.name}`)
    // console.log(`Hello, ${this.notExist}`)
  }
}
obj.hello()

export { }
