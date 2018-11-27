namespace outer {
  var local = 1
  export var a = local
  export namespace inner {
    export var x = 10
  }
}

namespace outer {
  var local = 2
  export var b = local
  export namespace inner {
    export var y = 20
  }
}
