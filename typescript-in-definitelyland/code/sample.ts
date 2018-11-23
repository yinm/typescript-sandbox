abstract class Animal {
  abstract name: string
  abstract get poo(): string

  abstract speak(): string
  sleep(): string {
    return 'zzzZZZ...'
  }
}

// new Animal()

class Cat extends Animal {
  name = 'Cat'
  poo = 'poo....'

  speak(): string {
    return 'meow'
  }
}

new Cat()

export { }
