let clazz: {
  new(): any;
}

class Sample {
}
clazz = Sample
let obj = new clazz()
console.log(obj)

clazz = class { }
obj = new clazz()

export { }
