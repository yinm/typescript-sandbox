declare var fooVariable: string

declare function fooFunction(): string

declare class FooClass {
  public bar(): string
}

declare module FooModule {
  export function bar(): string
}

declare module 'fooModule' {
  export function bar(): string
}

interface FooInterface {
  bar(): string;
}
