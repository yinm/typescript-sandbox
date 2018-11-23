let objA = {
  x: 1,
  y: 2,
}

let objB: {
  x: number;
  y: number;
}
objB = { x: 1, y: 2 }

objA = objB
objB = objA

export {}
