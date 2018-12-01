let clazz: {
  new(): any
}

class Sample {}
clazz = Sample
let obj = new clazz()

clazz = class { }
obj = new clazz()

export { obj }
