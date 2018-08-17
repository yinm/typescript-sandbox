class MyData<T> {
  constructor(
    public value: T
  ) {}

  getArray(): T[] {
    return [this.value, this.value, this.value]
  }
}

const v1 = new MyData<string>('hello')
console.log(v1.getArray())
const v2 = new MyData<number>(123)
console.log(v2.getArray())
