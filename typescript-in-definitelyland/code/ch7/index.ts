declare var assert: Assert

interface Assert {
  (value: any): void;
  ok(value: any): void;
}

assert(foo === 'foo')
assert.ok(value)
