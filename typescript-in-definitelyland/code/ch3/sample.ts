class DataContainer<T = string> {
  data?: T

  print() {
    console.log(this.data)
  }
}

const obj1 = new DataContainer()
obj1.data = ''
// obj1.data = 1

const obj2 = new DataContainer<number>()
obj2.data = 1
