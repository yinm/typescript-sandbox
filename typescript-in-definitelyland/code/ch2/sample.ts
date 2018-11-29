abstract class Animal {
  abstract name: string
  abstract get poo(): string

  abstract speak(): string
  static sleep(): string {
    return 'zzzZZZ...'
  }
  claim(): string {
    return this.name
  }
}

class Cat extends Animal {
  name = 'Cat'
  poo = 'poo....'

  speak(): string {
    return 'meow'
  }
}

new Cat()

export { }
