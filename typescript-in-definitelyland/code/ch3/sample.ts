let obj: any = 1

let num = obj as number

let str = 'string'
num = str as any

num = <any>str

export { num }
