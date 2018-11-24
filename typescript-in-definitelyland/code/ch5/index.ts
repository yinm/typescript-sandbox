let objA: Date
let objB: Date | null | undefined

objA = new Date()
console.log(objA)
objA = null

// objA = null as any

objB = new Date()
objB = null
objB = void 0

// objB.getTime()

objB!.getTime()

export { }
