interface IPig {
  bow(): string
}

class Pig implements IPig {
  bow(): string {
    return 'Bow wow wow'
  }
}

class Dandy {
  bow(): string {
    return 'Gooood'
  }
  throwCard(): string {
    return 'Naaaaaaaaaaaaaaaaaaaaaa'
  }
}

function callBow(pig: IPig) {
  console.log(pig.bow())
}

callBow(new Pig())
callBow(new Dandy())
