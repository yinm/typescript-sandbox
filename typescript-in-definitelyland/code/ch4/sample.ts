let obj: number | boolean | string = null as any

typeof obj === 'string' && obj.charAt(0)
// typeof obj === 'number' && obj.charAt(0)

if (typeof obj === 'string' || typeof obj === 'boolean') {
} else {
  obj.toFixed(0)
}

typeof obj === 'string' ? obj.charAt(0) : obj

if (typeof obj === 'string') {
  obj.charAt(0)
} else {
  obj
}

if (!(typeof obj !== 'string')) {
  obj.charAt(0)
}

export { }
