class Sample {
  private _tmp: any

  constructor(
    public str: string,
  ) {}

  methodA() {
    console.log(this._tmp)
  }
}

let obj: Sample = {
  str: 'Hi',
  _tmp: null,
}

export { obj }
