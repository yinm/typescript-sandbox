interface Cat {
  kind: string
  name: string
  age: number
}

type CatPropertyNmaes = keyof Cat
