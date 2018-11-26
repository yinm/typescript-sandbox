declare function assert(value: any): void

declare namespace assert {
  function ok(value: any): void
}

assert(foo === 'foo')
assert.ok(value)
