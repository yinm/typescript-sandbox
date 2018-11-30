namespace a {
  export class Sample { }
}

namespace b {
  export let objA: a.Sample
  objA = new a.Sample()

  import Sample = a.Sample
  export let objB: Sample
  objB = new Sample()

  import Test = a.Sample
  export let objC: Test
  objC = new Test()

  objA = new Test()
}

