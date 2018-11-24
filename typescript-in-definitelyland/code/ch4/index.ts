interface Cat {
  kind: string;
  name: string;
  age: number;
}

type KindType = Cat['kind']
type NameOrAge = Cat['name'|'age']
