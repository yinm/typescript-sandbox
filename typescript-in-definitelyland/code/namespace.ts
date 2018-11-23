namespace a {
  class Sample {
    hello(word = 'TypeScript') {
      return `Hello, ${word}`
    }
  }

  export interface Hello {
    hello(word?: string): string
  }
  export let obj: Hello = new Sample()
}

namespace a {
  export function bye(word = 'JavaScript') {
    return `Bye, ${word}`
  }

  // let tmp = new Sample()
}

namespace b {
  export namespace c {
    export function hello() {
      return a.obj.hello()
    }
  }
}

namespace d.e {
  export function hello() {
    return a.obj.hello()
  }
}

console.log(b.c.hello())
console.log(d.e.hello())
