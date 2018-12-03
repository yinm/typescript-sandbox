let strArray: Array<string> = ['a', 'b', 'c']
let numArray: Array<number> = [1, 2, 3]

strArray.forEach(v => v.charAt(0))
numArray.forEach(v => v.toFixed(2))

strArray.forEach((v: string) => v.charAt(0))
numArray.forEach((v: number) => v.toFixed(0))
// strArray.forEach((v: RegExp) => v.test('str'))
