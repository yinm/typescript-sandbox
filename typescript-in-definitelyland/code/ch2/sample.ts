class Base {
  a = 'a'
  public b = 'b'
  protected c = 'c'
  private d = 'd'

  method() {
    this.d
  }
}

class Inherit extends Base {
  method() {
    this.a
    this.b
    this.c
    // this.d
  }
}

const base = new Base()
base.a
base.b
// base.c
// base.d
