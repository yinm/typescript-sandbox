declare function hello(word: string): string
declare function hello(callback: () => string): string

hello('TS')
hello(() => 'function')

declare function bye(word: string | { (): string }): string

bye('JS')
bye(() => 'function')
