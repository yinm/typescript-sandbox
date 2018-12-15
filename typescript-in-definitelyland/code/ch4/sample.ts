type ConstructorA<T, U> = { new(s: string): T } & { new(...args: any[]): U }
type ConstructorB<T, U> = { new(s: string): T & U }

const A: ConstructorA<Date, RegExp> = null as any
const B: ConstructorB<Date, RegExp> = A
const A2: ConstructorA<Date, RegExp> = B
