namespace a {
  export class Sample{}
}

namespace b {
  export let objA: a.Sample
  objA = new a.Sample()

  import Sample = a.Sample
  export let objB: Sample
  objB = new Sample()

  import Test = a.Sample
  export let objC: Test
  objC = new Sample()

  objA = new Test()
}

console.log(b.objA)
console.log(b.objB)
console.log(b.objC)
