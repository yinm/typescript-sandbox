interface Result {
  a: number
  b: number
}

class MyData<T extends Result> {
  constructor(
    public value: T
  ) {}

  getArray(): T[] {
    return [this.value, this.value, this.value]
  }
}

const result = {
  a: 3,
  b: 5
}

const v1 = new MyData<Result>(result)
console.log(v1.getArray())
