let obj: any = 1

let num = obj as number
console.log(num)

let str = 'string'
num = str as any
num = <any>str
console.log(num)

export { }
