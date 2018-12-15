"use strict";
function Tagged(Base) {
    return class extends Base {
        constructor(...args) {
            super(...args);
            this.tag = '';
        }
    };
}
class Score {
    constructor(point) {
        this.point = point;
    }
}
const TaggedScore = Tagged(Score);
const ts = new TaggedScore(1);
ts.tag = 'vv';
console.log(ts.tag, ts.point);
// new TaggedScore('a')
class RankingScore extends TaggedScore {
    constructor(rank, tag, point) {
        super(point);
        this.rank = rank;
        this.tag = tag;
    }
}
const rs = new RankingScore(1, 'vv', 100);
console.log(rs.rank, rs.tag, rs.point);
