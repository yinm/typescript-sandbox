declare function funcA(word: string): string
declare function funcA(num: number): string

let obj: string | number = null as any

// funcA(obj)

declare function funcB(word: string | number): string
funcB(obj)
