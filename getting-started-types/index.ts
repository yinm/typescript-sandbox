interface Some<T> {
  type: 'Some'
  value: T
}

interface None {
  type: 'None'
}

type Option<T> = Some<T> | None

function map<T, U>(obj: Option<T>, f: (obj: T) => U): Option<U> {
  if (obj.type === 'Some') {
    return {
      type: 'Some',
      value: f(obj.value)
    }
  } else {
    return {
      type: 'None'
    }
  }
}
