class Sample {
  constructor(public str: string) {}
}

let obj: Sample
let clazz: typeof Sample

obj = new Sample('TS')
clazz = Sample

obj = new clazz('TS')

let alterClazz: {
  new (str: string): { str: string }
}
alterClazz = clazz
clazz = alterClazz

export { obj }
