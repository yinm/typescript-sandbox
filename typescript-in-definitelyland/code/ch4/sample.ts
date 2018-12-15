interface Cat {
  kind: string
  name: string
  age?: number
}

let c1: Cat = {
  kind: 'NorwegianForestCat',
  name: 'アルファ'
}

let c2: Partial<Cat> = {
  kind: 'NorwegianForestCat'
}

let c3: Readonly<Cat> = {
  kind: 'NorwegianForestCat',
  name: 'アルファ',
  age: 3
}
// c3.kind = 'TypeScript'

let c4: Pick<Cat, 'name' | 'age'> = {
  name: 'アルファ'
}

let c5: Record<keyof Cat, boolean> = {
  kind: true,
  name: true,
  age: true
}

export { c1, c2, c3, c4, c5 }
