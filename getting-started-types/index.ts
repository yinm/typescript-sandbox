const value = rand()

const str = value as number
console.log(str * 10)

function rand(): string | number {
  if (Math.random() < 0.5) {
    return 'hello'
  } else {
    return 123
  }
}
