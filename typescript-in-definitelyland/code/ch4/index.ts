interface Add {
  type: 'add';
  left: Tree;
  right: Tree;
}

interface Leaf {
  type: 'leaf';
  value: number;
}

type Tree = Add | Leaf;

let node: Tree = {
  type: 'add',
  left: {
    type: 'add',
    left: { type: 'leaf', value: 10 },
    right: { type: 'leaf', value: 3 }
  },
  right: {
    type: 'leaf',
    value: 5
  }
}

console.log(calc(node))

function calc(root: Tree): number {
  switch (root.type) {
    case 'leaf':
      return root.value
    case 'add':
      return calc(root.left) + calc(root.right)
    default:
      throw new Error('unknown node')
  }
}

export {}
