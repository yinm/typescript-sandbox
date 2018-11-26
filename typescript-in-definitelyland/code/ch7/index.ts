class Person {
  constructor(public name: string) {}
}
interface Person {
  age: number;
}
let p: Person = new Person('TS')
console.log(p.name, p.age)

interface AnimalConstructor {
  new(): Animal;
}
interface Animal {
  speak(): string;
}
let Animal: AnimalConstructor = class {
  speak() {
    return '???'
  }
}

class Cat extends Animal {
  speak() {
    return 'meow'
  }
}
let cat: Cat = new cat()
console.log(cat.speak())

export {}
