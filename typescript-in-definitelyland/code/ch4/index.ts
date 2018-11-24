let v1: string | number
v1 = 'str'
if (typeof v1 === 'string') {
  let f = () => {
    if (typeof v1 === 'string') {
      console.log(v1.toUpperCase())
    }
  }
  f()

  v1 = 1
  f()
}

const v2: string | number = null as any
if (typeof v2 === 'string') {
  let f = () => {
    console.log(v2.toUpperCase())
  }
  f()
}

export { v1, v2 }
