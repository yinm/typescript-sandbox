let obj = {
  str: 'string',
  num: 1,
}

let str: string = obj['str']
let num: number = obj['num']
// let any = obj['notExists']

let propertyName1 = 'str'
// let str2 = obj[propertyName1]

const propertyName2 = 'str'
let str3 = obj[propertyName2]

export { str, num, propertyName1, propertyName2, str3 }
