declare namespace ghost {
  interface Test {
    str: string;
  }
}

let test: ghost.Test
test = { str: 'aaa' }
test.str

// let notExists = ghost

export { test }
