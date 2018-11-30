enum Suit {
  Heart,
  Diamond,
  Club,
  Spade
}

console.log(Suit.Heart, Suit[Suit.Heart])

const enum Permission {
  Execute = 1,
  Read = 2,
  Write = 4,
  All = Execute | Read | Write
}
console.log(Permission.All)

enum Tree {
  Node = 'node',
  Leaf = 'leaf'
}
console.log(Tree.Node)

export { Suit, Permission, Tree }
