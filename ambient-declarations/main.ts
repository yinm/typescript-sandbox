/// <reference path="foo.d.ts" />

const result1 = fooVariable

const result2 = fooFunction()

const result3 = new FooClass

const result4 = FooModule.bar()

import m = require('fooModule')
const result5 = m.bar()

class Bar implements FooInterface {
  public bar(): string {
    return 'TS'
  }
}
