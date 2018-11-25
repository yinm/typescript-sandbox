class GenericType<T> {
  zeroValue: T
  add: (x: T, y: T) => T
}

let myGenericString = new GenericType<string>()
myGenericString.zeroValue = ''
myGenericString.add = function(x, y) { return x + y }

console.log(myGenericString.add(myGenericString.zeroValue, 'test'))
