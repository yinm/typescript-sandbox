// 2nd
import bar, { hello } from './bar'
import * as bar2 from './bar'
import bar3 = require('./bar')

console.log(hello())
console.log(bar())
console.log(bar2.hello())
console.log(bar2.default())
console.log(bar3.hello())
console.log(bar3.default())

import * as buzz from './buzz'
import buzz2 = require('./buzz')

console.log(buzz())
console.log(buzz2())
