interface Cat {
  kind: string;
  name: string;
  age: number;
}

type CatPropertyNames = keyof Cat
