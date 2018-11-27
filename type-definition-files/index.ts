import * as _ from 'lodash'

let z: _.I

z = {
  x() {
    return 'test'
  },
  y() {
    return 3
  }
}

z.x()
z.y()
