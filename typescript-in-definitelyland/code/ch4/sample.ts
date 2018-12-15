type Constructor<T> = new (...args: any[]) => T

function Tagged<T extends Constructor<object>>(Base: T) {
  return class extends Base {
    tag = ''
    constructor(...args: any[]) {
      super(...args)
    }
  }
}

class Score {
  constructor(public point: number) {}
}

const TaggedScore = Tagged(Score)

const ts = new TaggedScore(1)
ts.tag = 'vv'
console.log(ts.tag, ts.point)

// new TaggedScore('a')

class RankingScore extends TaggedScore {
  constructor(public rank: number, tag: string, point: number) {
    super(point)
    this.tag = tag
  }
}

const rs = new RankingScore(1, 'vv', 100)
console.log(rs.rank, rs.tag, rs.point)
