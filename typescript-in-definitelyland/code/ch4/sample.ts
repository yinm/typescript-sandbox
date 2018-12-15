interface Storage {
  $save(): void
}

function mixinStorage<T>(base: T): T & Storage {
  let modified = base as any
  modified.$save = () => {
    console.log(`データを保存しました！ ${JSON.stringify(base)}`)
  }

  return modified
}

let base = {
  name: 'TypeScript'
}
let obj = mixinStorage(base)

obj.$save()

obj.name = 'JavaScript'
obj.$save()

export { }
